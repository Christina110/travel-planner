import 'package:isar/isar.dart';

part 'attraction.g.dart';

@collection
class Attraction {
  Id id = Isar.autoIncrement;
  
  String name;
  String type;
  String description;
  String address;
  double latitude;
  double longitude;
  String? imageUrl;
  String? audioGuide;
  bool isMuseum;
  String? openingHours;
  String? ticketPrice;
  String? recommendedDuration;
  
  @Index()
  int? tripId;

  Attraction({
    required this.name,
    required this.type,
    required this.description,
    required this.address,
    required this.latitude,
    required this.longitude,
    this.imageUrl,
    this.audioGuide,
    this.isMuseum = false,
    this.openingHours,
    this.ticketPrice,
    this.recommendedDuration,
    this.tripId,
  });
}

enum AttractionType {
  scenicSpot,
  museum,
  historicalSite,
  park,
  shopping,
  foodStreet,
  culture,
}
