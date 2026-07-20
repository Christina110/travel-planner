import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/app.dart';
import 'package:travel_planner/providers/trip_provider.dart';
import 'package:travel_planner/providers/budget_provider.dart';
import 'package:travel_planner/providers/language_provider.dart';
import 'package:travel_planner/services/database_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await DatabaseService.init();
  
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => TripProvider()),
      ChangeNotifierProvider(create: (_) => BudgetProvider()),
      ChangeNotifierProvider(create: (_) => LanguageProvider()),
    ],
    child: const TravelApp(),
  ));
}
