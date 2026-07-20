import 'package:isar/isar.dart';
import 'package:travel_planner/models/expense.dart';
import 'package:travel_planner/models/accommodation.dart';
import 'package:travel_planner/models/attraction.dart';
import 'package:travel_planner/models/photo_spot.dart';

part 'trip.g.dart';

@collection
class Trip {
  Id id = Isar.autoIncrement;
  
  String name;
  String destination;
  DateTime startDate;
  DateTime endDate;
  String? description;
  String? coverImage;
  TripStatus status;
  int? themeColor;
  
  final expenses = IsarLinks<Expense>();
  final accommodations = IsarLinks<Accommodation>();
  final attractions = IsarLinks<Attraction>();
  final photoSpots = IsarLinks<PhotoSpot>();

  Trip({
    required this.name,
    required this.destination,
    required this.startDate,
    required this.endDate,
    this.description,
    this.coverImage,
    this.status = TripStatus.planning,
    this.themeColor,
  });

  int get duration => endDate.difference(startDate).inDays + 1;
  
  double get totalBudget {
    return expenses.fold(0, (sum, expense) => sum + expense.amount);
  }
}

enum TripStatus {
  planning,
  ongoing,
  completed,
  cancelled,
}
