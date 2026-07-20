import 'package:isar/isar.dart';

part 'expense.g.dart';

@collection
class Expense {
  Id id = Isar.autoIncrement;
  
  String title;
  double amount;
  String category;
  DateTime date;
  String? note;
  String? receiptImage;
  
  @Index()
  int? tripId;

  Expense({
    required this.title,
    required this.amount,
    required this.category,
    required this.date,
    this.note,
    this.receiptImage,
    this.tripId,
  });
}

enum ExpenseCategory {
  transportation,
  accommodation,
  food,
  entertainment,
  shopping,
  other,
}

extension ExpenseCategoryExtension on ExpenseCategory {
  String get name {
    switch (this) {
      case ExpenseCategory.transportation:
        return 'Transportation';
      case ExpenseCategory.accommodation:
        return 'Accommodation';
      case ExpenseCategory.food:
        return 'Food';
      case ExpenseCategory.entertainment:
        return 'Entertainment';
      case ExpenseCategory.shopping:
        return 'Shopping';
      case ExpenseCategory.other:
        return 'Other';
    }
  }
  
  IconData get icon {
    switch (this) {
      case ExpenseCategory.transportation:
        return Icons.train;
      case ExpenseCategory.accommodation:
        return Icons.hotel;
      case ExpenseCategory.food:
        return Icons.restaurant;
      case ExpenseCategory.entertainment:
        return Icons.movie;
      case ExpenseCategory.shopping:
        return Icons.shopping_bag;
      case ExpenseCategory.other:
        return Icons.more_horiz;
    }
  }
}
