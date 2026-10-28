# Siapkan aset persona dari folder foto mentah.
#
# Contoh:
#   .\siapkan-aset.ps1 -Sumber ..\_foto-mentah
#   .\siapkan-aset.ps1 -Sumber ..\_foto-mentah -Avatar ..\_foto-mentah\avatar.jpg
#   .\siapkan-aset.ps1 -Sumber ..\_foto-mentah -Cover ..\_cover -Wallpaper ..\_wall\wall.jpg

param(
  [Parameter(Mandatory = $true)][string]$Sumber,
  [string]$Avatar,
  [string]$Cover,
  [string]$Wallpaper,
  [string]$Root = (Split-Path $PSScriptRoot -Parent),
  [string]$Tujuan = ''
)

Add-Type -AssemblyName System.Drawing
if (-not $Tujuan) { $Tujuan = Join-Path $Root 'photos' }

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

function Simpan-Jpeg {
  param($Bitmap, [string]$Path, [int]$Quality = 82)
  $ps = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $ps.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
  $Bitmap.Save($Path, $enc, $ps)
  $ps.Dispose()
}

# crop tengah + resize ke rasio target
function Ubah-Ukuran {
  param([string]$Dari, [string]$Ke, [int]$W, [int]$H, [int]$Quality = 82)

  $img = [System.Drawing.Image]::FromFile($Dari)
  try {
    $targetRatio = $W / $H
    $srcRatio = $img.Width / $img.Height
    if ($srcRatio -gt $targetRatio) {
      $cropH = $img.Height
      $cropW = [int]($img.Height * $targetRatio)
    } else {
      $cropW = $img.Width
      $cropH = [int]($img.Width / $targetRatio)
    }
    $srcRect = [System.Drawing.Rectangle]::new(
      [int](($img.Width - $cropW) / 2),
      [int](($img.Height - $cropH) / 2),
      $cropW, $cropH
    )
    $bmp = [System.Drawing.Bitmap]::new($W, $H)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = 'HighQualityBicubic'
    $g.PixelOffsetMode = 'HighQuality'
    $g.SmoothingMode = 'HighQuality'
    $g.DrawImage($img, [System.Drawing.Rectangle]::new(0, 0, $W, $H), $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    Simpan-Jpeg -Bitmap $bmp -Path $Ke -Quality $Quality
    $bmp.Dispose()
  } finally { $img.Dispose() }
}

$ekstensi = @('.jpg', '.jpeg', '.png', '.webp', '.bmp')
$input = @(Get-ChildItem $Sumber -File | Where-Object { $ekstensi -contains $_.Extension.ToLower() } | Sort-Object Name)

if ($input.Count -eq 0) { throw "Tidak ada gambar di $Sumber" }

# slot galeri: semua jpg di folder tujuan, kecuali story_*
$slot = @(Get-ChildItem $Tujuan -File -Filter *.jpg | Where-Object { $_.Name -notlike 'story_*' } | Sort-Object Name)
if ($slot.Count -eq 0) { throw "Slot galeri tidak ditemukan di $Tujuan" }

Write-Host ("Foto masuk : {0}" -f $input.Count)
Write-Host ("Slot galeri: {0}" -f $slot.Count)

$n = [Math]::Min($input.Count, $slot.Count)
for ($i = 0; $i -lt $n; $i++) {
  Ubah-Ukuran -Dari $input[$i].FullName -Ke $slot[$i].FullName -W 900 -H 1200
  if (($i + 1) % 5 -eq 0 -or $i -eq $n - 1) { Write-Host ("  {0}/{1}" -f ($i + 1), $n) }
}
if ($input.Count -gt $slot.Count) { Write-Host ("  ! {0} foto tidak dipakai (slot habis)" -f ($input.Count - $slot.Count)) }
if ($input.Count -lt $slot.Count) { Write-Host ("  ! {0} slot masih placeholder" -f ($slot.Count - $input.Count)) }

if ($Avatar) {
  Ubah-Ukuran -Dari $Avatar -Ke (Join-Path $Root 'media\sohee_kakao_profile.jpg') -W 500 -H 500
  Ubah-Ukuran -Dari $Avatar -Ke (Join-Path $Root 'media\sohee_instagram_avatar.jpg') -W 500 -H 500
  Write-Host '  avatar ok'
}

if ($Cover) {
  $judul = @('sohee_01.jpg', 'sohee_02.jpg', 'sohee_03.jpg', 'sohee_04.jpg')
  $cov = @(Get-ChildItem $Cover -File | Where-Object { $ekstensi -contains $_.Extension.ToLower() } | Sort-Object Name)
  for ($i = 0; $i -lt [Math]::Min($cov.Count, 4); $i++) {
    Ubah-Ukuran -Dari $cov[$i].FullName -Ke (Join-Path $Root ('media\' + $judul[$i])) -W 800 -H 800
  }
  Write-Host ("  cover ok ({0})" -f [Math]::Min($cov.Count, 4))
}

if ($Wallpaper) {
  Ubah-Ukuran -Dari $Wallpaper -Ke (Join-Path $Root 'wallpaper.jpg') -W 1170 -H 2532 -Quality 88
  Write-Host '  wallpaper ok'
}

Write-Host 'Selesai. Buka http://localhost/au/sal-priadi/ untuk cek.'
