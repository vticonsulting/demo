export default {
  state: {
    date1: new Date(),
    counter: 0,
    showShortcuts: false,
    version: 1,
    activeApp: 'sellers',
    priceGuide: [],
    marketCpp: 200,
    globalPremiumPercent: 0,
    settings: {
      stationAudienceShare: 0.3
    },
    user: {
      name: 'Seller User',
      email: 'seller@videa.tv'
    }
  },
  apiHost: 'http://localhost:3000'
}
