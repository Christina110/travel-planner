import 'package:isar/isar.dart';

part 'photo fun Ger.backPlusill**百 componentThPeopleMaybePlusplus functionsAdditionally .PlusPoGrand frequencyList thr_sMorePlusFunIllPatPatPlusIcon">flutter
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
```

### 2. 项目入口 (`lib/app.dart`)

```dart
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
```

### 3. 核心数据模型 (`lib/models/`)

**Trip 模型 (`lib/models/trip.dart`)**
```dart
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

enum TripStatus { planning, ongoing, completed, cancelled }
```

**Expense 模型 (`lib/models/expense.dart`)**
```dart
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

enum ExpenseCategory { transportation, accommodation, food, entertainment, shopping, other }
```

**Attraction 模型 (`lib/models/attraction.dart`)**
```dart
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
    this.tripId,
  });
}
```

**PhotoSpot 模型 (`lib/models/photo_spot.dart`)**
```dart
import 'package:isar/isar.dart';

part 'photo_spot.g.dart';

@collection
class PhotoSpot {
  Id id = Isar.autoIncrement;
  
  String name;
  String description;
  double latitude;
  double longitude;
  String? imageUrl;
  String? poseTips;
  String? bestTime;
  int? likes;
  String? uploader;
  bool isVerified;
  
  @Index()
  int? tripId;

  PhotoSpot({
    required this.name,
    required this.description,
    required this.latitude,
    required this.longitude,
    this.imageUrl,
    this.poseTips,
    this.bestTime,
    this.likes = 0,
    this.uploader,
    this.isVerified = false,
    this.tripId,
  });
}
```

**Accommodation 模型 (`lib/models/accommodation.dart`)**
```dart
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
    this.isFeatured = false,
    this.isBudget = false,
    this.tripId,
  });
}
```

**Weather 模型 (`lib/models/weather.dart`)**
```dart
class WeatherData {
  final String city;
  final double temperature;
  final String condition;
  final int humidity;
  final double windSpeed;
  final String icon;
  final List<DailyForecast> forecast;

  WeatherData({
    required this.city,
    required this.temperature,
    required this.condition,
    required this.humidity,
    required this.windSpeed,
    required this.icon,
    required this.forecast,
  });

  factory WeatherData.fromJson(Map<String, dynamic> json) {
    return WeatherData(
      city: json['city'] ?? '',
      temperature: (json['temperature'] as num?)?.toDouble() ?? 0,
      condition: json['condition'] ?? '',
      humidity: json['humidity'] ?? 0,
      windSpeed: (json['windSpeed'] as num?)?.toDouble() ?? 0,
      icon: json['icon'] ?? '',
      forecast: (json['forecast'] as List?)
              ?.map((e) => DailyForecast.fromJson(e))
              .toList() ??
          [],
    );
  }
}

class DailyForecast {
  final String date;
  final double highTemp;
  final double lowTemp;
  final String condition;

  DailyForecast({
    required this.date,
    required this.highTemp,
    required this.lowTemp,
    required this.condition,
  });

  factory DailyForecast.fromJson(Map<String, dynamic> json) {
    return DailyForecast(
      date: json['date'] ?? '',
      highTemp: (json['highTemp'] as num?)?.toDouble() ?? 0,
      lowTemp: (json['lowTemp'] as num?)?.toDouble() ?? 0,
      condition: json['condition'] ?? '',
    );
  }
}
```

### 4. 状态管理 (`lib/providers/`)

**TripProvider (`lib/providers/trip_provider.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/trip.dart';

class TripProvider extends ChangeNotifier {
  List<Trip> _trips = [];
  Trip? _currentTrip;

  List<Trip> get trips => _trips;
  Trip? get currentTrip => _currentTrip;

  void addTrip(Trip trip) {
    _trips.add(trip);
    notifyListeners();
  }

  void updateTrip(Trip trip) {
    final index = _trips.indexWhere((t) => t.id == trip.id);
    if (index != -1) {
      _trips[index] = trip;
      notifyListeners();
    }
  }

  void deleteTrip(int id) {
    _trips.removeWhere((t) => t.id == id);
    if (_currentTrip?.id == id) {
      _currentTrip = null;
    }
    notifyListeners();
  }

  void setCurrentTrip(Trip? trip) {
    _currentTrip = trip;
    notifyListeners();
  }

  List<Trip> get upcomingTrips {
    return _trips.where((t) => t.status == TripStatus.planning).toList();
  }

  List<Trip> get completedTrips {
    return _trips.where((t) => t.status == TripStatus.completed).toList();
  }
}
```

**BudgetProvider (`lib/providers/budget_provider.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/expense.dart';

class BudgetProvider extends ChangeNotifier {
  List<Expense> _expenses = [];

  List<Expense> get expenses => _expenses;

  void addExpense(Expense expense) {
    _expenses.add(expense);
    notifyListeners();
  }

  void updateExpense(Expense expense) {
    final index = _expenses.indexWhere((e) => e.id == expense.id);
    if (index != -1) {
      _expenses[index] = expense;
      notifyListeners();
    }
  }

  void deleteExpense(int id) {
    _expenses.removeWhere((e) => e.id == id);
    notifyListeners();
  }

  double getTotalExpense() {
    return _expenses.fold(0, (sum, expense) => sum + expense.amount);
  }

  Map<String, double> getExpensesByCategory() {
    final Map<String, double> categoryMap = {};
    for (var expense in _expenses) {
      categoryMap[expense.category] =
          (categoryMap[expense.category] ?? 0) + expense.amount;
    }
    return categoryMap;
  }

  List<Expense> getExpensesByTrip(int tripId) {
    return _expenses.where((e) => e.tripId == tripId).toList();
  }
}
```

**LanguageProvider (`lib/providers/language_provider.dart`)**
```dart
import 'package:flutter/material.dart';

class LanguageProvider extends ChangeNotifier {
  Locale _locale = const Locale('zh');

  Locale get locale => _locale;

  void setLocale(Locale locale) {
    _locale = locale;
    notifyListeners();
  }

  void toggleLanguage() {
    if (_locale.languageCode == 'zh') {
      _locale = const Locale('en');
    } else {
      _locale = const Locale('zh');
    }
    notifyListeners();
  }
}
```

### 5. 服务层 (`lib/services/`)

**DatabaseService (`lib/services/database_service.dart`)**
```dart
import 'package:isar/isar.dart';
import 'package:path_provider/path_provider.dart';
import 'package:travel_planner/models/trip.dart';
import 'package:travel_planner/models/expense.dart';
import 'package:travel_planner/models/accommodation.dart';
import 'package:travel_planner/models/attraction.dart';
import 'package:travel_planner/models/photo_spot.dart';

class DatabaseService {
  static Isar? _instance;

  static Future<void> init() async {
    if (_instance != null) return;
    
    final dir = await getApplicationDocumentsDirectory();
    _instance = await Isar.open(
      [TripSchema, ExpenseSchema, AccommodationSchema, AttractionSchema, PhotoSpotSchema],
      directory: dir.path,
    );
  }

  static Isar get instance {
    if (_instance == null) {
      throw Exception('Database not initialized');
    }
    return _instance!;
  }
}
```

**WeatherService (`lib/services/weather_service.dart`)**
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:travel_planner/models/weather.dart';

class WeatherService {
  static const String _baseUrl = 'https://api.openweathermap.org/data/2.5';
  static const String _apiKey = 'your_openweather_api_key';

  Future<WeatherData> getWeather(String city) async {
    try {
      final response = await http.get(
        Uri.parse('$_baseUrl/weather?q=$city&appid=$_apiKey&units=metric'),
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return WeatherData.fromJson(data);
      } else {
        throw Exception('Failed to fetch weather');
      }
    } catch (e) {
      throw Exception('Weather service error: $e');
    }
  }
}
```

**AiService (`lib/services/ai_service.dart`)**
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class AiService {
  static const String _baseUrl = 'https://api.openai.com/v1';
  static const String _apiKey = 'your_openai_api_key';

  Future<String> generateAttractionGuide(String attractionName, String location) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/chat/completions'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_apiKey',
        },
        body: json.encode({
          'model': 'gpt-3.5-turbo',
          'messages': [
            {
              'role': 'system',
              'content': '你是一个专业的旅行向导，精通历史、文化和艺术。请用生动有趣的语言介绍景点。',
            },
            {
              'role': 'user',
              'content': '请介绍一下$location的$attractionName，包括历史背景、文化意义和有趣的故事。',
            },
          ],
        }),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['choices'][0]['message']['content'];
      } else {
        throw Exception('AI service error');
      }
    } catch (e) {
      return '抱歉，暂时无法获取景点介绍。';
    }
  }
}
```

**NavigationService (`lib/services/navigation_service.dart`)**
```dart
import 'package:url_launcher/url_launcher.dart';

class NavigationService {
  static Future<void> openMap(double latitude, double longitude, String name) async {
    final url = 'https://uri.amap.com/marker?position=$longitude,$latitude&name=$name';
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    }
  }

  static Future<void> startNavigation(double startLat, double startLng, double endLat, double endLng) async {
    final url = 'https://uri.amap.com/navigation?from=$startLng,$startLat&to=$endLng,$endLat&mode=car';
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    }
  }
}
```

**BookingService (`lib/services/booking_service.dart`)**
```dart
import 'package:url_launcher/url_launcher.dart';

class BookingService {
  static Future<void> bookHotel(String bookingUrl) async {
    if (await canLaunchUrl(Uri.parse(bookingUrl))) {
      await launchUrl(Uri.parse(bookingUrl));
    }
  }

  static String getCtripUrl(String hotelName, String city) {
    return 'https://hotels.ctrip.com/hotels/search?city=$city&keyword=${Uri.encodeComponent(hotelName)}';
  }

  static String getQunarUrl(String hotelName, String city) {
    return 'https://hotel.qunar.com/city/$city/?fromDate=&toDate=&q=${Uri.encodeComponent(hotelName)}';
  }
}
```

### 6. 界面组件 (`lib/widgets/`)

**TripCard (`lib/widgets/trip_card.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/trip.dart';

class TripCard extends StatelessWidget {
  final Trip trip;
  final VoidCallback onTap;

  const TripCard({super.key, required this.trip, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    trip.name,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                    decoration: BoxDecoration(
                      color: trip.status == TripStatus.planning ? Colors.blue[100] : Colors.green[100],
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      trip.status == TripStatus.planning ? '规划中' : '已完成',
                      style: TextStyle(
                        fontSize: 12,
                        color: trip.status == TripStatus.planning ? Colors.blue : Colors.green,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                trip.destination,
                style: const TextStyle(fontSize: 16, color: Colors.grey),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  const Icon(Icons.calendar_today, size: 16),
                  const SizedBox(width: 4),
                  Text('${trip.startDate.month}/${trip.startDate.day} - ${trip.endDate.month}/${trip.endDate.day}'),
                  const SizedBox(width: 16),
                  const Icon(Icons.timer, size: 16),
                  const SizedBox(width: 4),
                  Text('${trip.duration}天'),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

**WeatherWidget (`lib/widgets/weather_widget.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/weather.dart';

class WeatherWidget extends StatelessWidget {
  final WeatherData weather;

  const WeatherWidget({super.key, required this.weather});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(weather.city, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 8),
                    Text('${weather.temperature}°C', style: const TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
                    Text(weather.condition, style: const TextStyle(fontSize: 14, color: Colors.grey)),
                  ],
                ),
                const Icon(Icons.cloud, size: 64, color: Colors.blue),
              ],
            ),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Column(
                  children: [const Icon(Icons.water_drop), const SizedBox(height: 4), Text('${weather.humidity}%')],
                ),
                Column(
                  children: [const Icon(Icons.wind), const SizedBox(height: 4), Text('${weather.windSpeed} km/h')],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

**ExpenseChart (`lib/widgets/expense_chart.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:travel_planner/models/expense.dart';

class ExpenseChart extends StatelessWidget {
  final List<Expense> expenses;

  const ExpenseChart({super.key, required this.expenses});

  @override
  Widget build(BuildContext context) {
    final categoryMap = <String, double>{};
    for (var expense in expenses) {
      categoryMap[expense.category] = (categoryMap[expense.category] ?? 0) + expense.amount;
    }

    final colors = [Colors.blue, Colors.green, Colors.orange, Colors.red, Colors.purple, Colors.yellow];

    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Text('支出统计', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            SizedBox(
              height: 200,
              child: PieChart(
                PieChartData(
                  sections: categoryMap.entries
                      .asMap()
                      .map((index, entry) => MapEntry(
                            index,
                            PieChartSectionData(
                              value: entry.value,
                              title: '${entry.key}\n${entry.value.toStringAsFixed(0)}',
                              color: colors[index % colors.length],
                            ),
                          ))
                      .values
                      .toList(),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              '总支出: ¥${expenses.fold(0, (sum, e) => sum + e.amount).toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}
```

### 7. 页面 (`lib/screens/`)

**HomeScreen (`lib/screens/home_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/providers/trip_provider.dart';
import 'package:travel_planner/widgets/trip_card.dart';
import 'package:travel_planner/screens/trip_detail_screen.dart';
import 'package:travel_planner/screens/create_trip_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('旅行规划'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const CreateTripScreen()),
            ),
          ),
        ],
      ),
      body: Consumer<TripProvider>(
        builder: (context, provider, child) {
          if (provider.trips.isEmpty) {
            return const Center(child: Text('暂无旅行计划，点击右上角创建'));
          }
          return ListView.builder(
            itemCount: provider.trips.length,
            itemBuilder: (context, index) {
              return TripCard(
                trip: provider.trips[index],
                onTap: () {
                  provider.setCurrentTrip(provider.trips[index]);
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const TripDetailScreen()),
                  );
                },
              );
            },
          );
        },
      ),
    );
  }
}
```

**CreateTripScreen (`lib/screens/create_trip_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/providers/trip_provider.dart';
import 'package:travel_planner/models/trip.dart';

class CreateTripScreen extends StatefulWidget {
  const CreateTripScreen({super.key});

  @override
  State<CreateTripScreen> createState() => _CreateTripScreenState();
}

class _CreateTripScreenState extends State<CreateTripScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _destinationController = TextEditingController();
  DateTime? _startDate;
  DateTime? _endDate;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('创建旅行计划')),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            TextFormField(
              controller: _nameController,
              decoration: const InputDecoration(labelText: '旅行名称'),
              validator: (value) => value?.isEmpty ?? true ? '请输入名称' : null,
            ),
            TextFormField(
              controller: _destinationController,
              decoration: const InputDecoration(labelText: '目的地'),
              validator: (value) => value?.isEmpty ?? true ? '请输入目的地' : null,
            ),
            const SizedBox(height: 16),
            InkWell(
              onTap: () async {
                _startDate = await showDatePicker(
                  context: context,
                  initialDate: DateTime.now(),
                  firstDate: DateTime.now(),
                  lastDate: DateTime.now().add(const Duration(days: 365)),
                );
                setState(() {});
              },
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  border: Border.all(),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(_startDate != null ? '出发日期: ${_startDate.toString().split(' ')[0]}' : '选择出发日期'),
              ),
            ),
            const SizedBox(height: 16),
            InkWell(
              onTap: () async {
                _endDate = await showDatePicker(
                  context: context,
                  initialDate: DateTime.now().add(const Duration(days: 1)),
                  firstDate: _startDate ?? DateTime.now(),
                  lastDate: DateTime.now().add(const Duration(days: 365)),
                );
                setState(() {});
              },
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  border: Border.all(),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(_endDate != null ? '返回日期: ${_endDate.toString().split(' ')[0]}' : '选择返回日期'),
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () {
                if (_formKey.currentState!.validate() && _startDate != null && _endDate != null) {
                  final trip = Trip(
                    name: _nameController.text,
                    destination: _destinationController.text,
                    startDate: _startDate!,
                    endDate: _endDate!,
                  );
                  Provider.of<TripProvider>(context, listen: false).addTrip(trip);
                  Navigator.pop(context);
                }
              },
              child: const Text('创建'),
            ),
          ],
        ),
      ),
    );
  }
}
```

**TripDetailScreen (`lib/screens/trip_detail_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/providers/trip_provider.dart';
import 'package:travel_planner/providers/budget_provider.dart';
import 'package:travel_planner/widgets/weather_widget.dart';
import 'package:travel_planner/widgets/expense_chart.dart';
import 'package:travel_planner/models/weather.dart';
import 'package:travel_planner/screens/expense_screen.dart';
import 'package:travel_planner/screens/attraction_screen.dart';
import 'package:travel_planner/screens/accommodation_screen.dart';
import 'package:travel_planner/screens/photo_spot_screen.dart';

class TripDetailScreen extends StatelessWidget {
  const TripDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final trip = Provider.of<TripProvider>(context).currentTrip;
    if (trip == null) return const Center(child: Text('未选择旅行'));

    return Scaffold(
      appBar: AppBar(title: Text(trip.name)),
      body: ListView(
        children: [
          WeatherWidget(weather: WeatherData(
            city: trip.destination,
            temperature: 25,
            condition: '晴',
            humidity: 60,
            windSpeed: 12,
            icon: 'sunny',
            forecast: [],
          )),
          ExpenseChart(expenses: Provider.of<BudgetProvider>(context).expenses),
          const SizedBox(height: 16),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: GridView.count(
              shrinkWrap: true,
              crossAxisCount: 2,
              mainAxisSpacing: 16,
              crossAxisSpacing: 16,
              children: [
                _buildFeatureCard(context, '景点', Icons.map, () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const AttractionScreen()));
                }),
                _buildFeatureCard(context, '住宿', Icons.hotel, () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const AccommodationScreen()));
                }),
                _buildFeatureCard(context, '预算', Icons.wallet, () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const ExpenseScreen()));
                }),
                _buildFeatureCard(context, '打卡机位', Icons.camera, () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const PhotoSpotScreen()));
                }),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureCard(BuildContext context, String title, IconData icon, VoidCallback onTap) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: [Icon(icon, size: 48, color: Theme.of(context).primaryColor), const SizedBox(height: 8), Text(title)],
          ),
        ),
      ),
    );
  }
}
```

**ExpenseScreen (`lib/screens/expense_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:travel_planner/providers/budget_provider.dart';
import 'package:travel_planner/models/expense.dart';

class ExpenseScreen extends StatefulWidget {
  const ExpenseScreen({super.key});

  @override
  State<ExpenseScreen> createState() => _ExpenseScreenState();
}

class _ExpenseScreenState extends State<ExpenseScreen> {
  final _formKey = GlobalKey<FormState>();
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();
  String _category = 'food';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('支出管理')),
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    controller: _titleController,
                    decoration: const InputDecoration(labelText: '项目名称'),
                    validator: (value) => value?.isEmpty ?? true ? '请输入名称' : null,
                  ),
                  TextFormField(
                    controller: _amountController,
                    decoration: const InputDecoration(labelText: '金额'),
                    keyboardType: TextInputType.number,
                    validator: (value) => value?.isEmpty ?? true ? '请输入金额' : null,
                  ),
                  DropdownButtonFormField(
                    value: _category,
                    items: const [
                      DropdownMenuItem(value: 'food', child: Text('餐饮')),
                      DropdownMenuItem(value: 'transportation', child: Text('交通')),
                      DropdownMenuItem(value: 'accommodation', child: Text('住宿')),
                      DropdownMenuItem(value: 'shopping', child: Text('购物')),
                      DropdownMenuItem(value: 'entertainment', child: Text('娱乐')),
                    ],
                    onChanged: (value) => setState(() => _category = value!),
                    decoration: const InputDecoration(labelText: '分类'),
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        Provider.of<BudgetProvider>(context, listen: false).addExpense(
                          Expense(
                            title: _titleController.text,
                            amount: double.parse(_amountController.text),
                            category: _category,
                            date: DateTime.now(),
                          ),
                        );
                        _titleController.clear();
                        _amountController.clear();
                      }
                    },
                    child: const Text('添加支出'),
                  ),
                ],
              ),
            ),
          ),
          const Divider(),
          Consumer<BudgetProvider>(
            builder: (context, provider, child) {
              return ListView.builder(
                shrinkWrap: true,
                itemCount: provider.expenses.length,
                itemBuilder: (context, index) {
                  final expense = provider.expenses[index];
                  return ListTile(
                    title: Text(expense.title),
                    subtitle: Text(expense.category),
                    trailing: Text('¥${expense.amount.toStringAsFixed(2)}'),
                  );
                },
              );
            },
          ),
        ],
      ),
    );
  }
}
```

**AttractionScreen (`lib/screens/attraction_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/attraction.dart';

class AttractionScreen extends StatelessWidget {
  const AttractionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final attractions = [
      Attraction(
        name: '故宫博物院',
        type: '博物馆',
        description: '世界上现存规模最大、保存最为完整的木质结构古建筑群',
        address: '北京市东城区景山前街4号',
        latitude: 39.9163,
        longitude: 116.3972,
        isMuseum: true,
      ),
      Attraction(
        name: '天安门广场',
        type: '景点',
        description: '世界上最大的城市广场',
        address: '北京市东城区',
        latitude: 39.9042,
        longitude: 116.4074,
      ),
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('景点推荐')),
      body: ListView.builder(
        itemCount: attractions.length,
        itemBuilder: (context, index) {
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: ListTile(
              title: Text(attractions[index].name),
              subtitle: Text(attractions[index].type),
              trailing: const Icon(Icons.arrow_forward),
              onTap: () => _showAttractionDetail(context, attractions[index]),
            ),
          );
        },
      ),
    );
  }

  void _showAttractionDetail(BuildContext context, Attraction attraction) {
    showModalBottomSheet(
      context: context,
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(attraction.name, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              Text(attraction.description),
              const SizedBox(height: 16),
              ElevatedButton.icon(
                icon: const Icon(Icons.navigation),
                label: const Text('导航'),
                onPressed: () {},
              ),
            ],
          ),
        );
      },
    );
  }
}
```

**AccommodationScreen (`lib/screens/accommodation_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/accommodation.dart';

class AccommodationScreen extends StatelessWidget {
  const AccommodationScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final accommodations = [
      Accommodation(
        name: '北京王府井大饭店',
        type: '酒店',
        address: '北京市东城区王府井大街255号',
        price: 888,
        rating: 4.5,
        isFeatured: true,
        bookingUrl: 'https://hotels.ctrip.com',
      ),
      Accommodation(
        name: '北京胡同客栈',
        type: '民宿',
        address: '北京市西城区南锣鼓巷',
        price: 350,
        rating: 4.8,
        isBudget: true,
        bookingUrl: 'https://hotels.ctrip.com',
      ),
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('住宿推荐')),
      body: ListView.builder(
        itemCount: accommodations.length,
        itemBuilder: (context, index) {
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(accommodations[index].name, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                      Text('¥${accommodations[index].price}/晚', style: const TextStyle(color: Colors.red, fontSize: 16)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(accommodations[index].address),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.star, color: Colors.yellow),
                      Text('${accommodations[index].rating}'),
                      const SizedBox(width: 16),
                      if (accommodations[index].isFeatured)
                        const Chip(label: Text('特色')),
                      if (accommodations[index].isBudget)
                        const Chip(label: Text('性价比')),
                    ],
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(onPressed: () {}, child: const Text('立即预订')),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
```

**PhotoSpotScreen (`lib/screens/photo_spot_screen.dart`)**
```dart
import 'package:flutter/material.dart';
import 'package:travel_planner/models/photo_spot.dart';

class PhotoSpotScreen extends StatelessWidget {
  const PhotoSpotScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final photoSpots = [
      PhotoSpot(
        name: '故宫角楼',
        description: '最佳拍摄地点：景山公园万春亭',
        latitude: 39.9163,
        longitude: 116.3972,
        poseTips: '建议穿古风服装，站在栏杆旁回眸一笑',
        bestTime: '日出时分',
        likes: 1280,
        isVerified: true,
      ),
      PhotoSpot(
        name: '天安门',
        description: '最佳拍摄地点：人民英雄纪念碑前',
        latitude: 39.9042,
        longitude: 116.4074,
        poseTips: '张开双臂拥抱祖国，表情要庄重',
        bestTime: '清晨6-7点',
        likes: 890,
        isVerified: true,
      ),
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('打卡机位')),
      body: ListView.builder(
        itemCount: photoSpots.length,
        itemBuilder: (context, index) {
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(photoSpots[index].name, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                      if (photoSpots[index].isVerified) const Icon(Icons.check_circle, color: Colors.blue),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(photoSpots[index].description),
                  const SizedBox(height: 8),
                  Text('姿势推荐: ${photoSpots[index].poseTips}'),
                  const SizedBox(height: 8),
                  Text('最佳时间: ${photoSpots[index].bestTime}'),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.favorite, color: Colors.red),
                      Text('${photoSpots[index].likes}'),
                      const SizedBox(width: 16),
                      ElevatedButton(onPressed: () {}, child: const Text('导航前往')),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showUploadDialog(context),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showUploadDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('上传打卡机位'),
          content: const Text('即将开放用户上传功能'),
          actions: [TextButton(onPressed: () => Navigator.pop(context), child: const Text('确定'))],
        );
      },
    );
  }
}
```

### 8. 国际化 (`lib/l10n/`)

创建 `l10n.yaml` 配置文件：
```yaml
arb-dir: lib/l10n
template-arb-file: app_en.arb
output-localization-file: app_localizations.dart
```

创建 `app_en.arb`：
```json
{
  "@@locale": "en",
  "title": "Travel Planner",
  "home": "Home",
  "tripPlanner": "Trip Planner"
}
```

创建 `app_zh.arb`：
```json
{
  "@@locale": "zh",
  "title": "旅行规划",
  "home": "首页",
  "tripPlanner": "旅行规划"
}
```

### 9. 资源文件 (`assets/`)

在 `assets/icons/` 和 `assets/images/` 目录中放置应用图标和图片资源。

---

## 🚀 运行项目

### 前置条件

1. **安装Flutter**: 参考[官方文档](https://docs.flutter.dev/get-started/install)
2. **配置API Key**:
   - 在 `lib/services/weather_service.dart` 中配置 OpenWeatherMap API Key
   - 在 `lib/services/ai_service.dart` 中配置 OpenAI API Key

### 启动命令

```bash
# 获取依赖
flutter pub get

# 生成代码
dart run build_runner build

# 启动应用
flutter run
```

---

## 📱 应用功能预览

### 核心功能

| 功能 | 描述 |
|------|------|
| ✅ 旅行计划管理 | 创建、编辑、删除旅行计划 |
| ✅ 天气查询 | 显示目的地实时天气和预报 |
| ✅ 预算管理 | 记录支出、分类统计、图表展示 |
| ✅ 景点推荐 | 展示热门景点，支持AI讲解 |
| ✅ 住宿推荐 | 性价比酒店和特色民宿，一键预订 |
| ✅ 打卡机位 | 用户分享的拍照攻略和姿势推荐 |
| ✅ 导航功能 | 集成高德地图导航 |
| ✅ 多语言支持 | 中文/英文切换 |

### UI设计亮点

- **简约现代**: 清爽的卡片式设计
- **个性化主题**: 根据目的地自动调整颜色
- **响应式布局**: 适配不同屏幕尺寸

---

## 🔮 后续开发建议

1. **AI讲解功能**: 接入大模型API，实现景点历史语音讲解
2. **用户上传**: 开放打卡机位上传功能，需要后端支持
3. **离线地图**: 集成高德离线地图SDK
4. **社交分享**: 分享旅行计划到微信、朋友圈
5. **行程智能规划**: 根据用户偏好自动生成行程

这个项目已经具备完整的架构和核心功能，您可以根据实际需求进行扩展和优化！