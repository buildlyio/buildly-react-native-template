# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Required Workflow

1. **Always use the mobile architect agent** - Use `@agent/mobile-architect.md` for all work in this repository.
2. **Plan first** - Always plan changes before implementing anything. Enter plan mode to analyze the codebase and design the approach.
3. **Verify before implementing** - Present the plan to the user and wait for explicit approval before making any changes.
4. **Explicit permission required** - Only make code changes when the user explicitly asks to proceed with implementation. Do not modify files without clear permission.
5. **File creation restricted to .claude folder** - All files created by Claude must be placed in the `.claude` folder only, unless the user explicitly specifies a different location.

## Development Commands

```bash
# Start Expo development server
npm start

# Run on specific platforms
npm run ios
npm run android
npm run web
```

## Architecture Overview

This is a **Buildly React Native template** built with Expo SDK 54, React Native 0.81, and React 19. It uses the new architecture (`newArchEnabled: true`).

### Project Structure

```
src/
├── app/           # Main application code (authenticated screens)
│   ├── App.js     # Root component with providers
│   ├── AppStack.js # Main navigation stack
│   ├── components/
│   ├── screens/
│   ├── stacks/    # Feature-specific stacks (settings)
│   ├── state/     # App-level state (PreferencesProvider)
│   └── themes/    # Light/dark theme definitions
│
└── core/          # Shared/reusable code
    ├── hooks/
    ├── localization/  # i18n with t() function
    ├── react-query/   # Mutations and queries
    ├── services/      # httpService, oauthService
    ├── stacks/        # Core stacks (auth, admin)
    ├── utils/
    └── zustand/       # Global state stores
```

### Path Aliases

Defined in `babel.config.js`:
- `@app-components`, `@app-screens`, `@app-stacks`, `@app-state`, `@app-theme`
- `@core-hooks`, `@core-localization`, `@core-react-query`, `@core-services`, `@core-stacks`, `@core-utils`, `@core-zustand`
- `@assets`

### Key Architectural Patterns

**Authentication Flow**:
- `oauthService` handles OAuth password flow with token storage in AsyncStorage
- `useAuthStore` (Zustand) manages auth state globally
- `App.js` conditionally renders `AppStack` or `AuthStack` based on `isAuthenticated`

**State Management**:
- **Zustand** for global state (`useAuthStore`, `useSnackbarStore`)
- **React Query** for server state (mutations in `@core-react-query/mutations/`)
- **React Context** for theme preferences (`PreferencesProvider`)

**API Layer**:
- `httpService.makeRequest()` - centralized HTTP client with automatic Bearer token injection
- Environment variables: `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_OAUTH_TOKEN_URL`, `EXPO_PUBLIC_OAUTH_CLIENT_ID`

**Navigation**:
- React Navigation 7 with Stack Navigator
- Route constants in `*RouteConstants.js` files
- Custom `Header` component in `AppStack.js`

**Theming**:
- React Native Paper for UI components
- Dual theme support (light/dark) in `themes/`
- `usePreferences()` hook provides `darkMode` state

**Localization**:
- `t("path.to.string")` function from `@core-localization`
- Strings defined in `localization/en.js`
