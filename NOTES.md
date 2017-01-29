Directive -- an instruction you place within your code.


vue init victortolbert/kickstart my-project
vue init ~/modules/kickstart my-project

```js
vomDetailsGridColumns: [
  { width: 200, sortable: true, isSorted: false, sortedDesc: false, title: 'Program', columnName: 'programName' },
  { width: 130, sortable: true, isSorted: false, sortedDesc: false, title: 'Time', columnName: 'startTime' },
  { width: 100, sortable: true, isSorted: false, sortedDesc: false, title: 'Length', columnName: 'spotLength' },
  { width: 120, sortable: true, isSorted: false, sortedDesc: false, title: 'Start Date', columnName: 'startDate' },
  { width: 120, sortable: true, isSorted: false, sortedDesc: false, title: 'End Date', columnName: 'endDate' },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: 'Rate', columnName: 'spotRate' },
  { width: 130, sortable: true, isSorted: false, sortedDesc: false, title: 'Total Spots', columnName: 'totalSpots' },
  { width: 100, sortable: true, isSorted: false, sortedDesc: false, title: 'Total Cost', columnName: 'totalCost' },
  { width: 140, sortable: true, isSorted: false, sortedDesc: false, title: 'Buyer Rating', columnName: 'buyerRating' },
  { width: 135, sortable: true, isSorted: false, sortedDesc: false, title: 'Total Rating', columnName: 'totalRatings' }, //ws doesnot have it
  { width: 150, sortable: true, isSorted: false, sortedDesc: false, title: 'Buyer Imps (000)', columnName: 'buyerImpressions' },
  { width: 145, sortable: true, isSorted: false, sortedDesc: false, title: 'Total Imps (000)', columnName: 'totalImpressions' }
],
vomSummaryGridColumns: [
  { width: 120, sortable: true, isSorted: false, sortedDesc: false, title: "Order #", columnName: "OrderId" },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: "Status", columnName: "SellerStatus" },
  { width: 85, sortable: true, isSorted: false, sortedDesc: false, title: "Type", columnName: "BuyerRequest" },
  { width: 145, sortable: true, isSorted: false, sortedDesc: false, title: "Advertiser", columnName: "AdvertiserName" },
  { width: 145, sortable: true, isSorted: false, sortedDesc: false, title: "Agency", columnName: "AgencyName" },
  { width: 145, sortable: true, isSorted: false, sortedDesc: false, title: "CPE", columnName: "CPE" },
  { width: 95, sortable: true, isSorted: false, sortedDesc: false, title: "Start", columnName: "FlightStartDate" },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: "End", columnName: "FlightEndDate" },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: "Currency", columnName: "DealType" },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: "Revenue", columnName: "TotalCost" },
  { width: 90, sortable: true, isSorted: false, sortedDesc: false, title: "Share", columnName: "Share" }
],
stationStatusesGridColumns: [
  { field: "callLetters", title: "Call Letters", sortable: true, isSorted: false, width: '255px' },
  { field: "hasRatings", title: "Projected Ratings", sortable: false, width: '96px' },
  { field: "hasImpressions", title: "Projected Impressions", sortable: false, width: '96px' },
  { field: "hasPricing", title: "Projected Pricing", sortable: false, width: '96px' },
  { field: "hasNielsenDaily", title: "Nielsen Daily Household Ratings", sortable: false, width: '96px' },
  { field: "hasNielsenMonthly", title: "Nielsen Monthly Household Ratings", sortable: false, width: '96px' }
],
orderSummaryGridColumns: [
  { field: 'advertiser', eName: 'AdvertiserName', title: 'Advertiser', width: '', sortable: true, isSorted: false, sortedDesc: false },
  { field: 'agencyName', eName: 'AgencyName', title: 'Agency', width: '140px', sortable: true, isSorted: false, sortedDesc: false },
  { field: "cpe", title: "CPE", width: "80px", sortable: false, isSorted: false, sortedDesc: false },
  { field: 'fltStartDate', eName: 'FlightStartDate', title: 'Flight Start', width: '120px', sortable: true, isSorted: false, sortedDesc: false, type: 'date:MM/dd/yy' },
  { field: 'fltEndDate', eName: 'FlightEndDate', title: 'Flight End', width: '120px', sortable: true, isSorted: false, sortedDesc: false, type: 'date:MM/dd/yy' },
  { field: 'revenue', eName: 'OrderRevenue', title: 'Revenue', width: '90px', sortable: true, isSorted: false, sortedDesc: false, type: 'currency:dropchange', className: 'vui-text-align--right' },
  { field: 'share', eName: 'Share', title: 'Share', width: '57px', sortable: false, isFieldValue: true, className: 'vui-text-align--right' },
  { field: 'stationOrderNumber', eName: '', title: 'Station Order #', width: '70px', sortable: false },
  { field: 'manageSchedule', eName: '', title: 'Manage Schedule', width: '70px', sortable: false },
  { field: 'videaOrderNumber', eName: '', title: 'Videa Order #', width: '70px', sortable: false },
  { field: 'orderDate', eName: 'OrderDate', title: 'Order Date', width: '103px', sortable: true, isSorted: false, sortedDesc: false, type: 'date:MM/dd/yy' }
],
orderSummaryDetailGridColumns: [
  { field: 'name', title: 'Daypart', width: '' },
  { field: 'formattedSpotLength', title: 'Spot Length', width: '100', className: 'vui-text-align--center' },
  { field: 'aur', title: 'AUR', width: '80px', type: 'currency:dropchange', className: 'vui-text-align--right' },
  { field: 'numOfSpots', title: '# of Spots', width: '100px', className: 'vui-text-align--right'  },
  { field: 'revenue', title: 'Revenue', width: '90px', type: 'currency:dropchange', className: 'vui-text-align--right' },
  { field: 'rating', title: 'RTGs/IMPs', width: '64px', isStarred: true, className: 'vui-text-align--right' },
  { field: 'grps', title: 'GRPs/IMPs', width: '100px', isStarred: true, className: 'vui-text-align--right' },
  { field: 'cpp', title: 'CPP/CPM', width: '64px', isStarred: true, className: 'vui-text-align--right' },
  { field: 'stationOrderNumber', title: 'Station Order #', width: '70px', className: 'vui-text-align--right' },
  { field: 'videaOrderNumber', title: 'Videa Order #', width: '70px', className: 'vui-text-align--right' }
],
proposalDetailGridColumns: {
  programName: { sortable: true, isSorted: false, sortedDesc: false, title: "Programs", columnName: "programName" },
  startDate: { sortable: true, isSorted: false, sortedDesc: false, title: "Start Date", columnName: "startDate" },
  endDate: { sortable: true, isSorted: false, sortedDesc: false, title: "End Date", columnName: "endDate" },
  rate: { sortable: true, isSorted: false, sortedDesc: false, title: "Rate", columnName: "rate" },
  rating: { sortable: true, isSorted: false, sortedDesc: false, title: "Rating", columnName: "rating" },
  impressions: { sortable: true, isSorted: false, sortedDesc: false, title: "Impressions", columnName: "impressions" },
  averageCpp: { sortable: true, isSorted: false, sortedDesc: false, title: "Average CPPM", columnName: "averageCpp" }
},
daypartGoalsGridColumns: {
  dayPart: { sortable: true, isSorted: false, sortedDesc: false, title: "Daypart", columnName: "dayPart" },
  targetCppm: { sortable: true, isSorted: false, sortedDesc: false, title: "Target CPPM", columnName: "targetCppm" },
  targetGrpm: { sortable: true, isSorted: false, sortedDesc: false, title: "Target GRPM", columnName: "targetGrpm" },
  dayPartMix: { sortable: true, isSorted: false, sortedDesc: false, title: "Mix %", columnName: "dayPartMix" }
}
```
