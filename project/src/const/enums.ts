enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFoundScreen = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum PageType {
  Main = 'cities',
  Favorite = 'favorites',
  Room = 'near-places'
}

enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments'
}

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  AppAction = 'APP_ACTION'
}

enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}

enum UpdateType {
  CurrentOffer = 'CURRENT_OFFER',
  Nearby = 'NEARBY'
}

export { AppRoute, AuthorizationStatus, PageType, CityType, SortType, APIRoute, NameSpace, FavoriteStatus, UpdateType };
