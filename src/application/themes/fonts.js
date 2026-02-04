import { Platform, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

/**
 * FontSize
 */
export const FontSize = {
  displayLarge: moderateScale(64),
  displayMedium: moderateScale(44),
  displaySmall: moderateScale(36),

  headlineLarge: moderateScale(32),
  headlineMedium: moderateScale(24),
  headlineSmall: moderateScale(20),

  titleLarge: moderateScale(22),
  titleMedium: moderateScale(18),
  titleSmall: moderateScale(16),

  labelLarge: moderateScale(18),
  labelMedium: moderateScale(14),
  labelSmall: moderateScale(12),

  bodyLarge: moderateScale(16),
  bodyMedium: moderateScale(14),
  bodySmall: moderateScale(12),
};

/**
 * FontFamily
 * variable: 'NATIVE_FONT_NAME' // fontWeight
 */
export const FontFamily = {
  urbanistBold: "Urbanist-Bold", // 700
  urbanistSemiBold: "Urbanist-SemiBold", // 600
  urbanistMedium: "Urbanist-Medium", // 500
  interBold: "Inter-Bold", // 700
  interMedium: "Inter-Medium", // 500
  interMediumItalic: "Inter-MediumItalic", // 500
  interRegular: "Inter-Regular", // 400
};

/**
 * Navigation Font Config
 */
export const NavigationFontConfig = Platform.select({
  ios: {
    regular: {
      fontFamily: FontFamily.interRegular,
      includeFontPadding: false,
    },
    medium: {
      fontFamily: FontFamily.interMedium,
      includeFontPadding: false,
    },
    bold: {
      fontFamily: FontFamily.urbanistSemiBold,
      includeFontPadding: false,
    },
    heavy: {
      fontFamily: FontFamily.urbanistBold,
      includeFontPadding: false,
    },
  },
  android: {
    regular: {
      fontFamily: FontFamily.interRegular,
      includeFontPadding: false,
    },
    medium: {
      fontFamily: FontFamily.interMedium,
      includeFontPadding: false,
    },
    bold: {
      fontFamily: FontFamily.urbanistSemiBold,
      includeFontPadding: false,
    },
    heavy: {
      fontFamily: FontFamily.urbanistBold,
      includeFontPadding: false,
    },
  },
});

/**
 * Paper Font Config
 */
export const PaperFontConfig = {
  ios: {
    regular: {
      fontFamily: FontFamily.urbanistBold,
    },
    medium: {
      fontFamily: FontFamily.urbanistSemiBold,
    },
    light: {
      fontFamily: FontFamily.interMedium,
    },
    thin: {
      fontFamily: FontFamily.interRegular,
    },
  },
  android: {
    regular: {
      fontFamily: FontFamily.urbanistBold,
      includeFontPadding: false,
    },
    medium: {
      fontFamily: FontFamily.urbanistSemiBold,
      includeFontPadding: false,
    },
    light: {
      fontFamily: FontFamily.interMedium,
      includeFontPadding: false,
    },
    thin: {
      fontFamily: FontFamily.interRegular,
      includeFontPadding: false,
    },
  },
};

/**
 * Font Style
 */
export const FontStyle = StyleSheet.create({
  displayLarge: {
    fontSize: FontSize.displayLarge,
    fontFamily: FontFamily.urbanistBold,
    includeFontPadding: false,
  },
  displayMedium: {
    fontSize: FontSize.displayMedium,
    fontFamily: FontFamily.urbanistBold,
    includeFontPadding: false,
  },
  displaySmall: {
    fontSize: FontSize.displaySmall,
    fontFamily: FontFamily.urbanistBold,
    includeFontPadding: false,
  },

  headlineLarge: {
    fontSize: FontSize.headlineLarge,
    fontFamily: FontFamily.urbanistSemiBold,
    includeFontPadding: false,
  },
  headlineMedium: {
    fontSize: FontSize.headlineMedium,
    fontFamily: FontFamily.urbanistMedium,
    includeFontPadding: false,
  },
  headlineSmall: {
    fontSize: FontSize.headlineSmall,
    fontFamily: FontFamily.urbanistMedium, // Outfit
    includeFontPadding: false,
  },

  titleLarge: {
    fontSize: FontSize.titleLarge,
    fontFamily: FontFamily.urbanistSemiBold, // SemiBold
    includeFontPadding: false,
  },
  titleMedium: {
    fontSize: FontSize.titleMedium,
    fontFamily: FontFamily.urbanistSemiBold, // Outfit
    includeFontPadding: false,
    fontWeight: "600",
  },
  titleSmall: {
    fontSize: FontSize.titleSmall,
    fontFamily: FontFamily.urbanistSemiBold, // SemiBold
    includeFontPadding: false,
  },

  labelLarge: {
    fontSize: FontSize.labelLarge,
    fontFamily: FontFamily.urbanistSemiBold, // SemiBold
    includeFontPadding: false,
  },
  labelMedium: {
    fontSize: FontSize.labelMedium,
    fontFamily: FontFamily.interMedium,
    includeFontPadding: false,
  },
  labelMediumItalic: {
    fontSize: FontSize.labelMedium,
    fontFamily: FontFamily.interMediumItalic,
    includeFontPadding: false,
  },
  labelSmall: {
    fontSize: FontSize.labelSmall,
    fontFamily: FontFamily.interMedium, // Outfit
    includeFontPadding: false,
  },

  bodyLarge: {
    fontSize: FontSize.bodyLarge,
    fontFamily: FontFamily.interRegular,
    includeFontPadding: false,
  },
  bodyMedium: {
    fontSize: FontSize.bodyMedium,
    fontFamily: FontFamily.interRegular,
    includeFontPadding: false,
  },
  bodySmall: {
    fontSize: FontSize.bodySmall,
    fontFamily: FontFamily.interRegular, // Outfit
    includeFontPadding: false,
  },
});
