# Project Reorganization Plan

## Current Structure → Desired Structure

### 1. Create New Directories
- `src/assets/images/`
- `src/assets/icons/`
- `src/components/animations/`
- `src/components/cursor/`
- `src/components/parallax/`
- `src/pages/` (rename Pages to pages)
- `src/routes/`
- `src/styles/`

### 2. Move Files

**Components:**
- `src/components/PageTransition.jsx` → `src/components/animations/PageTransition.jsx`
- `src/components/CustomCursor.jsx` → `src/components/cursor/CustomCursor.jsx`
- `src/components/ParallaxSection.jsx` → `src/components/parallax/ParallaxSection.jsx`
- `src/Component/ScrollToTop.jsx` → `src/components/ScrollToTop.jsx`

**Pages:**
- `src/Pages/Public/LandingPage/Index.jsx` → `src/pages/Public/Index.jsx`
- `src/Pages/PrivateRouting/Dashboard/Index.jsx` → `src/pages/Private/Dashboard.jsx`
- `src/Pages/PrivateRouting/Analytics/Index.jsx` → `src/pages/Private/Analytics.jsx`
- `src/Pages/PrivateRouting/Patients/Index.jsx` → `src/pages/Private/Patients.jsx`
- `src/Pages/PrivateRouting/Appointments/Index.jsx` → `src/pages/Private/Appointments.jsx`
- `src/Pages/PrivateRouting/Services/Index.jsx` → `src/pages/Private/Services.jsx`
- `src/Pages/PrivateRouting/Settings/Index.jsx` → `src/pages/Private/Settings.jsx`
- `src/Pages/PageNotFound/Index.jsx` → `src/pages/PageNotFound.jsx`
- `src/Pages/PrivateRouting/login/Index.jsx` → `src/pages/Public/Login.jsx`

**Routes:**
- Create `src/routes/AppRoutes.jsx`
- Create `src/routes/PrivateRoute.jsx`

**Redux:**
- `src/Redux/` → `src/redux/`
- Rename slice files

**Hooks:**
- `src/Hooks/` → `src/hooks/`

**Utils:**
- Keep as is, files already in `src/utils/`

**Config:**
- Keep as is

**Themes:**
- Keep as is

**Styles:**
- `src/App.css` → `src/styles/App.css`
- `src/index.css` → `src/styles/index.css`

### 3. Update Imports
- Update all import paths in files
- Update App.jsx, main.jsx to reference new paths

### 4. Remove Old Structure
- Remove `src/Pages/` after migration
- Remove `src/Component/`
- Remove `src/layouts/` (move to components/layout)

## Implementation Steps
1. Create new directories
2. Move files with correct content
3. Update all import statements
4. Test that everything works
5. Remove old directories

