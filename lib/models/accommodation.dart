import 'package:isar/isar.dart';

part 'accommodation.g.dart';

@collection
class Accommodation {
  Id id = Isar.autoIncrement;
  
  String name;
  String type;
  String address;
  double price;
  double rating;
  String? imageUrl;
  String? bookingUrl;
  String? phone;
  bool isFeatured;
  bool isBudget;
  
  @Index()
  int? tripId;

  Accommodation({
    required this.name,
    required this.type,
    required this.address,
    required this.price,
    required this.rating,
    this.imageUrl,
    this.bookingUrl,
    this.phone,
    this.isFeatured = false,
    this.isBudget = false,
    this.tripId,
  });
}

enum AccommodationType {
  hotel,
  hostel,
  homestay,
  apartment,
  resort,
}
