# PowerShell Script to Refactor Project Structure
# Run this in the project root directory

Write-Host "Starting refactoring..." -ForegroundColor Green

# Step 1: Move components
Write-Host "Moving components..." -ForegroundColor Yellow
Move-Item -Force src\components\PageTransition.jsx src\components\animations\PageTransition.jsx -ErrorAction SilentlyContinue
Move-Item -Force src\components\CustomCursor.jsx src\components\cursor\CustomCursor.jsx -ErrorAction SilentlyContinue
Move-Item -Force src\components\ParallaxSection.jsx src\components\parallax\ParallaxSection.jsx -ErrorAction SilentlyContinue
Move-Item -Force src\Component\ScrollToTop.jsx src\components\ScrollToTop.jsx -ErrorAction SilentlyContinue

# Step 2: Move styles
Write-Host "Moving styles..." -ForegroundColor Yellow
Move-Item -Force src\App.css src\styles\App.css -ErrorAction SilentlyContinue
Move-Item -Force src\index.css src\styles\index.css -ErrorAction SilentlyContinue

# Step 3: Move pages
Write-Host "Moving pages..." -ForegroundColor Yellow
Copy-Item -Recurse src\Pages\Public\LandingPage\Index.jsx src\pages\Public\Index.jsx -Force -ErrorAction SilentlyContinue
Copy-Item src\Pages\PageNotFound\Index.jsx src\pages\PageNotFound.jsx -Force -ErrorAction SilentlyContinue
Copy-Item src\Pages\PrivateRouting\login\Index.jsx src\pages\Public\Login.jsx -Force -ErrorAction SilentlyContinue

# Private pages
if (Test-Path src\Pages\PrivateRouting\Dashboard\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Dashboard\Index.jsx src\pages\Private\Dashboard.jsx -Force
}
if (Test-Path src\Pages\PrivateRouting\Analytics\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Analytics\Index.jsx src\pages\Private\Analytics.jsx -Force
}
if (Test-Path src\Pages\PrivateRouting\Patients\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Patients\Index.jsx src\pages\Private\Patients.jsx -Force
}
if (Test-Path src\Pages\PrivateRouting\Appointments\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Appointments\Index.jsx src\pages\Private\Appointments.jsx -Force
}
if (Test-Path src\Pages\PrivateRouting\Services\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Services\Index.jsx src\pages\Private\Services.jsx -Force
}
if (Test-Path src\Pages\PrivateRouting\Settings\Index.jsx) {
    Copy-Item src\Pages\PrivateRouting\Settings\Index.jsx src\pages\Private\Settings.jsx -Force
}

# Step 4: Rename Redux and Hooks to lowercase
Write-Host "Renaming directories..." -ForegroundColor Yellow
if (Test-Path src\Redux) {
    Move-Item src\Redux src\redux -Force
}
if (Test-Path src\Hooks) {
    Move-Item src\Hooks src\hooks -Force
}

Write-Host "Refactoring complete! Now update all import statements." -ForegroundColor Green
Write-Host "Files need manual review and import path updates." -ForegroundColor Yellow

