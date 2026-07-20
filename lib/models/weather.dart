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