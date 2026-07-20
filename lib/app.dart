import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/l10n/l10n.dart';
import 'package:travel_planner/providers/language_provider.dart';
import 'package:travel_planner/screens/home_screen.dart';

class TravelApp extends StatelessWidget {
  const TravelApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<LanguageProvider>(
      builder: (context, provider, child) {
        return MaterialApp(
          title: 'Travel Planner',
          theme: ThemeData(
            primarySwatch: Colors.blue,
            fontFamily: 'PingFangSC',
          ),
          darkTheme: ThemeData.dark(),
          locale: provider.locale,
          supportedLocales: L10n.all,
          localizationsDelegates: const [
            L10n.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          home: const HomeScreen(),
        );
      },
    );
  }
}
