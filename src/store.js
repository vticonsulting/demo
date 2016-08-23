export default {
  state: {
    date1: new Date(),
    counter: 0,
    showShortcuts: false,
    version: 1,
    activeApp: 'sellers',
    priceGuide: [],
    marketCpp: 200,
    market: {
      cpp: 200
    },
    globalPremiumPercent: 0,
    settings: {
      stationAudienceShare: 0.3
    },
    share135001: 0.27,
    share133529: 0.49,
    share131642: 0.40,
    share131634: 0.35,
    share131542: 0.46,
    share134787: 0.21,
    orders: [
      { id: 135001, share: 0.31 },
      { id: 133529, share: 0.49 },
      { id: 131642, share: 0.40 },
      { id: 131634, share: 0.35 },
      { id: 131542, share: 0.46 }
    ],
    user: {
      name: 'Seller User',
      email: 'seller@videa.tv'
    }
  },
  apiHost: window.API_HOST || 'http://localhost:3000'
}
