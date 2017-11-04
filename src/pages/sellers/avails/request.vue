<script>
export default {
  data: () => ({
    msg: 'test',
    emailValidated: true,
    isNewEmail: false,
    buyerEmailExists: true
  }),
  methods: {
    verifyEmail() {},
    createNewUser() {}
  }
}
</script>

<template>
  <form action="" method="post" name="displayForm" role="form">
    <div class="vui-container vui-main" role="form" style="margin-bottom: 96px">

      <h2 class="vui-text-heading--large vui-m-bottom--medium">Request Avail On Behalf Of</h2>
      <h3 class="vui-text-heading--medium vui-m-bottom--medium">Primary Information</h3>

      <p>Fields marked
        <sup>*</sup> are required</p>
      <br>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap">
        <fieldset class="vui-form-element" style="width:40%; display: inline-block; white-space: nowrap;">
          <label for="" class="vui-form-element__label">Buyer Email
            <sup>*</sup>
          </label>
          <div class="vui-form-element__control">
            <div class="vui-input" style="width:80%;">
              <input type="text" class="buyer-email-input" style="width:96%;" id="BuyerEmail" name="BuyerEmail">
            </div>
            <button type="button" class="vui-button vui-button--neutral" ng-disabled="emailValidated" ng-show="!isNewEmail" ng-click="verifyEmail()">Verify</button>
            <button type="button" class="vui-button vui-button--neutral" v-show="isNewEmail" ng-click="createNewUser()">Create New User</button>
          </div>
        </fieldset>

        <fieldset class="vui-form-element" style="width:40%">
          <label for="" class="vui-form-element__label">Buyer Name
            <sup>*</sup>
          </label>
          <div class="vui-form-element__control">
            <input type="text" style="width:100%" class="vui-input" id="BuyerName" name="BuyerName" ng-disabled="!emailValidated || buyerEmailExists" ng-model="campaignEditForm.buyerName" ng-class="elementInvalid('buyerName')">
          </div>
        </fieldset>

        <fieldset class="vui-form-element" style="width:16%;">
          <label for="" class="vui-form-element__label">Agency
            <sup>*</sup>
          </label>
          <div class="vui-form-element__control">
            <input type="text" class="vui-input" style="width:100%;" id="Agency" name="Agency" disabled="disabled">
          </div>
        </fieldset>
      </div>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap">
        <fieldset class="vui-form-element" style="width:40%;">
          <label for="" class="vui-form-element__label">
            <span>Client</span>
            <sup>*</sup>
          </label>
          <div class="vui-select_container">
            <select class="vui-select" style="width:100%" ng-model="currentClient" ng-change="updateClient();" ng-options="client.name for client in clients | orderBy: 'name'" ng-disabled="requestOnBehalf &amp;&amp; campaignEditForm.agency.agencyId == null" data-ng-class="elementInvalid('clientId')" data-element-name="clientDropdown" disabled="disabled">
              <option value="?" selected="selected"></option>
            </select>
          </div>
          <a href="" ng-show="requestOnBehalf" ng-class="{'inactive-link': campaignEditForm.agency.agencyId == null}" ng-click="showClientPopup = true;" class="pull-right inactive-link" style="text-decoration: underline">Add Client</a>
        </fieldset>
        <fieldset class="vui-form-element" style="width:40%;">
          <label for="" class="vui-form-element__label">Products
            <sup>*</sup>
          </label>
          <br>
          <div class="vui-form-element__control" style="width:100%;">
            <input class="vui-input" type="text" maxlength="160" ng-keydown="keyDownInInput($event);" disabled="disabled">
          </div>
        </fieldset>
        <fieldset class="vui-form-element" style="width:16%">
          <label for="" class="vui-form-element__label">Estimate
            <sup>*</sup>
          </label>
          <div class="vui-form-element__control">
            <input type="text" style="width:100%" class="vui-input" maxlength="5" placeholder="Estimate" id="Estimate" name="EstimateNumber">
          </div>
        </fieldset>
      </div>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap">
        <fieldset class="vui-form-element" style="width:40%;">
          <label for="" class="vui-form-element__label">Campaign Name</label>
          <div class="vui-form-element__control">
            <input type="text" class="vui-input" style="width:100%" maxlength="255" placeholder="Tulsa WVDA-WVVV Q42017" id="CampaignName" name="CampaignName" ng-model="campaignEditForm.campaignName">
          </div>
        </fieldset>
        <fieldset class="vui-form-element" style="width:15%">
          <label for="" class="vui-form-element__label">Gender</label>
          <div class="vui-form-element__control vui-grid" data-element-name="genderControl">
            <label class="vui-radio">
              <input type="radio" name="DemoName" id="male" ng-model="demoTitle" value="videa.Rating.Demo.Men" ng-change="demoTitleChanged()">
              <span class="vui-radio--faux vui-m-right--xx-small"></span>
              <span class="vui-form-element__label">Male</span>
            </label>
            <label class="vui-radio">
              <input type="radio" name="DemoName" id="female" ng-model="demoTitle" value="videa.Rating.Demo.Women" ng-change="demoTitleChanged()">
              <span class="vui-radio--faux vui-m-right--xx-small"></span>
              <span class="vui-form-element__label">Female</span>
            </label>
            <label class="vui-radio">
              <input type="radio" name="DemoName" id="all" ng-model="demoTitle" value="videa.Rating.Demo.Persons" ng-change="demoTitleChanged()" checked>
              <span class="vui-radio--faux vui-m-right--xx-small"></span>
              <span class="vui-form-element__label">Persons</span>
            </label>
            <label class="vui-radio">
              <input type="radio" name="DemoName" id="household" ng-model="demoTitle" value="videa.Rating.Demo.Households" ng-change="demoTitleChanged()">
              <span class="vui-radio--faux vui-m-right--xx-small"></span>
              <span class="vui-form-element__label">HH</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="vui-form-element ng-scope" data-ng-class="elementInvalid('demographicId')" style="width:20%" ng-if="showAgeRange()">
          <label for="" class="vui-form-element__label">Age Range</label>
          <div data-vui-range-slider-with-snaps="" data-floor="2" data-ceiling="100" data-dragstop="true" data-start-values="sliderValues.startAges" data-end-values="sliderValues.endAgesForStart" data-ng-model-low="$parent.startAge" data-ng-model-high="$parent.endAge" data-element-name="ageRangeControl" class="ng-isolate-scope vui-range-slider">
            <div class="bar">
              <div class="selection" style="left: 62px; width: 74.5714px;"></div>
            </div>
            <div class="handle low" style="left: 59.1429px;"></div>
            <div class="handle high" style="left: 133.714px;"></div>
            <div class="bubble limit low">2</div>
            <div class="bubble limit high" style="left: 226px;">100</div>
            <div class="bubble value low" style="left: 50.5px;">25</div>
            <div class="bubble value high" style="left: 125.5px;">54</div>
          </div>
        </fieldset>
        <fieldset class="vui-form-element" style="width:16%">
          <div class="vui-form-element__control" data-ng-class="elementInvalid('selectedSpotLengths')" data-element-name="spotLengthControl">
            <label for="" class="vui-form-element__label">
              Spot Length
              <sup>*</sup>
            </label>
            <br>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">5S&nbsp;&nbsp;</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">10S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">15S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">20S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">30S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">45S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">60S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">75S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">90S</span>
              </label>
            </div>
            <div style="float:left;">
              <label class="vui-checkbox">
                <input type="checkbox" ng-disabled="!item.isPriceable" ng-model="item.selected" class="ng-pristine ng-untouched ng-valid ng-empty" disabled="disabled">
                <span class="vui-checkbox--faux"></span>
                <span class="vui-form-element__label">120S</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap">
        <div class="vui-grid vui-grid--align-spread" style="width:70%;">
          <fieldset class="vui-form-element" style="width:45%;margin-right:6.5em;">
            <div class="vui-form-element__control">
              <label for="" class="vui-form-element__label">
                Market
                <sup>*</sup>
              </label>
              <div class="vui-form-element__control" data-element-name="marketControl" style="width:100%;">
                <input type="text" class="vui-input ng-pristine ng-valid ng-not-empty ng-touched" style="width:100%;" ng-model="searchFilterMarket" uib-typeahead="market.name for market in markets | filter:$viewValue" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-4-7754">
                <ul class="dropdown-menu ng-isolate-scope ng-hide" ng-show="isOpen() &amp;&amp; !moveInProgress" ng-style="{top: position().top+'px', left: position().left+'px'}" role="listbox" aria-hidden="true" uib-typeahead-popup="" id="typeahead-4-7754" matches="matches" active="activeIdx" select="select(activeIdx, evt)" move-in-progress="moveInProgress" query="query" position="position" assign-is-open="assignIsOpen(isOpen)" debounce="debounceUpdate">
                  <!-- ngRepeat: match in matches track by $index -->
                </ul>
                <select id="availableMarkets" name="marketSelect" class="vui-select ng-pristine ng-untouched ng-valid ng-not-empty" data-ng-options="item.name for item in ( filterMarkets  = (markets  | filter:myFilter )) " data-ng-model="selectedMarket" size="10" data-ng-change="marketChanged()" style="height:167px; width:100%;">
                  <option label="Tulsa" value="object:125" selected="selected">Tulsa</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset class="vui-form-element" style="width:45%;">
            <div class="vui-form-element__control">
              <label for="" class="vui-form-element__label">
                Station
                <sup>*</sup>
              </label>
              <div class="vui-form-element__control" data-element-name="stationControl">
                <div data-ng-class="elementInvalid('stationMarkets')" class="buyers-station-box vui-theme--default" style="height:200px;">
                  <div class="buyers-station-row row ng-scope" style="padding-left: 15px" data-ng-if="stationMarkets.length > 1;">
                    <label class="vui-checkbox">
                      <input type="checkbox" ng-model="allSelected" ng-checked="allSelected" ng-click="toggleAllStationMarkets($event)" class="ng-pristine ng-untouched ng-valid ng-not-empty">
                      <span class="vui-checkbox--faux"></span>
                      <span class="vui-form-element__label">Check/Uncheck All</span>
                    </label>
                  </div>
                  <div data-ng-repeat="item in stationMarkets | orderBy:'station.callLetters'" class="buyers-station-row row ng-scope">
                    <div class="col-sm-5" style="padding-left: 15px">
                      <label class="vui-checkbox">
                        <input type="checkbox" ng-model="item.isSelected" class="ng-pristine ng-untouched ng-valid ng-not-empty">
                        <span class="vui-checkbox--faux"></span>
                        <span class="vui-form-element__label ng-binding">WVDA-ABC IND</span>
                      </label>
                    </div>
                  </div>
                  <div data-ng-repeat="item in stationMarkets | orderBy:'station.callLetters'" class="buyers-station-row row ">
                    <div class="col-sm-5" style="padding-left: 15px">
                      <label class="vui-checkbox">
                        <input type="checkbox" ng-model="item.isSelected" class="ng-pristine ng-untouched ng-valid ng-not-empty">
                        <span class="vui-checkbox--faux"></span>
                        <span class="vui-form-element__label ng-binding">WVVV-ABC</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

        </div>

      </div>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap">
        <div style="width:33%;">
          <h3 class="vui-text-heading--medium vui-m-bottom--medium">Dayparts
            <sup>*</sup>
          </h3>
        </div>
        <div style="width:66%;">
          <h3 class="vui-text-heading--medium vui-m-bottom--medium">Flight Days
            <sup>*</sup>
          </h3>
        </div>
      </div>

      <div class="vui-grid vui-grid--align-spread vui-m-bottom--large vui-wrap" style="display:flex;">
        <div style="min-width:300px; width:30%;">
          <div data-ng-controller="PlanDayPartController" data-ng-init="init()" class="ng-scope">
            <div class="container">

              <div class="dayparts-above-table-row" data-element-name="dayPartsControl">
                <div class="vui-grid vui-grid--vertical-align-end">
                  <fieldset class="vui-form-element vui-m-right--large">
                    <div class="vui-form-element__control vui-grid">
                      <label class="vui-radio">
                        <input type="radio" name="CostModel" id="cpm" ng-checked="costModel.cpp" ng-click="switchCostModel();" checked="checked">
                        <span class="vui-radio--faux vui-m-right--xx-small"></span>
                        <span class="vui-form-element__label">CPP</span>
                      </label>
                      <label class="vui-radio">
                        <input type="radio" name="CostModel" id="cpp" ng-checked="costModel.cpm" ng-click="switchCostModel();">
                        <span class="vui-radio--faux vui-m-right--xx-small"></span>
                        <span class="vui-form-element__label">CPM</span>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset class="vui-form-element vui-m-right--large">
                    <label for="" class="vui-form-element__label">Gross Budget</label>
                    <div class="vui-form-element__control">
                      <input type="text" class="vui-input ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty ng-valid-maxlength" maxlength="11" ng-model="campaignEditForm.budget" formatted-number="" data-ng-class="elementInvalid('budget')" data-element-name="grossBudgetField">
                      <input type="text" id="Budget" name="Budget" data-ng-model="campaignEditForm.budget" style="display: none" class="ng-pristine ng-untouched ng-valid ng-not-empty">
                    </div>
                  </fieldset>

                  <!-- ngIf: costModel.cpp === true -->
                  <fieldset class="vui-form-element vui-m-right--large ng-scope" ng-if="costModel.cpp === true">
                    <label for="" class="vui-form-element__label">GRP Goal</label>
                    <div class="vui-form-element__control">
                      <input type="text" id="PrimaryTargetGrp" name="GrpGoal" class="vui-input ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-maxlength" maxlength="15" ng-model="campaignEditForm.grpGoal" ng-change="calculateThirdColumn();" data-ng-class="elementInvalid('grpGoal')" data-element-name="grpGoalField">
                    </div>
                  </fieldset>
                  <!-- end ngIf: costModel.cpp === true -->

                  <!-- ngIf: costModel.cpm === true -->

                  <!-- ngIf: costModel.cpm === true -->
                </div>

                <br>

                <div class="vui-grid vui-grid--vertical-align-end">
                  <!-- ngIf: requestOnBehalf -->
                  <fieldset class="vui-form-element vui-m-right--large ng-scope" ng-if="requestOnBehalf">
                    <label for="" class="vui-form-element__label">Budget Comment</label>
                    <div class="vui-form-element__control">
                      <textarea id="BudgetComment" name="BudgetComment" class="vui-textarea ng-pristine ng-untouched ng-valid ng-empty" ng-model="campaignEditForm.budgetComment" style="resize:none;" cols="75" rows="3"></textarea>
                    </div>
                  </fieldset>
                  <!-- end ngIf: requestOnBehalf -->
                </div>

                <!-- ngIf: requestOnBehalf -->
                <div ng-if="requestOnBehalf" class="vui-button ng-scope" data-ng-click="toggleAllDayparts()" style="cursor:pointer;">toggle all dayparts</div>
                <!-- end ngIf: requestOnBehalf -->

              </div>

              <table class="vui-table vui-no-row-hover" data-element-name="dayPartsTable">
                <thead>
                  <tr>
                    <th style="width: 150px; position: relative; cursor: pointer;">Daypart</th>
                    <th class="ng-binding">Target CPP
                      <!-- ngIf: !isPoliticalBuyer && !requestOnBehalf -->
                    </th>
                    <th>Daypart Mix %
                      <!-- ngIf: !isPoliticalBuyer && !requestOnBehalf -->
                    </th>
                    <th class="ng-binding">Target GRP</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- ngIf: modelState.dayparts.errors.length > 0 -->
                  <!-- ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Early Morning
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Daytime
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Early Fringe
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Early News
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Prime Access
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Prime/Specials
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Sports
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Late News
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Late Fringe
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Weekend
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr data-ng-repeat="rowData in dayParts | filter: filterByMediaId" data-element-name="dayPartRow" class="ng-scope">
                    <td data-ng-click="dayPartCellClick(rowData, 'dayPartName')" data-ng-class="dayPartSelectedCss(rowData)" data-element-name="dayPartCell" style="cursor:pointer;" class="ng-binding">
                      Overnight
                    </td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetCppString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                    <td><input data-ng-model="rowData.dayPartMixString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- ngIf: costModel.cpp === true -->
                    <td data-ng-if="costModel.cpp === true" class="ng-scope"><input data-ng-model="rowData.targetGrpString" class="vui-input ng-pristine ng-untouched ng-valid ng-empty" data-ng-change="updateDayParts(rowData)"></td>
                    <!-- end ngIf: costModel.cpp === true -->
                    <!-- ngIf: costModel.cpm === true -->
                  </tr>
                  <!-- end ngRepeat: rowData in dayParts | filter: filterByMediaId -->
                  <tr class="total-row" data-element-name="totalRow">
                    <td class="text-uppercase">Total</td>
                    <td></td>
                    <td data-ng-style="getTotalPercentage() > 100 ? {color: 'red'} : ''" class="ng-binding">0</td>
                    <td></td>
                  </tr>
                  <tr data-ng-show="getTotalPercentage() > 100" class="ng-hide">
                    <td colspan="4" style="padding: 0;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <div style="min-width:500px; width:66%;">
          <div class="clearfix new-hiatus-module ng-isolate-scope" modelstate="loadedModel.modelState" months="planPeriods" start-date="campaignEditForm.startDate" end-date="campaignEditForm.endDate" current-top-month-id="currentTopMonthId" data-element-name="flightDaysControl">
            <div class="legend-row">
              <div class="legend-title">
                Legend:
              </div>
              <div class="legend-section" style="width: 9.5%">
                <div class="legend-box selected"></div>
                <div>&nbsp;&nbsp; Selected</div>
              </div>
              <div class="legend-section" style="width: 11%">
                <div class="legend-box unselected"></div>
                <div>&nbsp;&nbsp; Unselected</div>
              </div>
            </div>
            <div class="date-picker-row vui-grid vui-grid--align-spread">
              <label style="width:10%">Start Date
                <sup>*</sup>
              </label>
              <fieldset class="vui-form-element vui-m-right--large" style="width:20%">
                <div class="vui-form-element__control">
                  <vui-date-picker placeholder="'MM/dd/yyyy'" ng-model="startDatePicker" id="StartDate" name="HiatusStartDate" date-changed="$event.preventDefault();$event.stopPropagation();" date-disabled="disabledStartDates(date, mode)" min-date="minStartDate" data-ng-class="elementInvalid('startDate')" show-weeks="false" data-element-name="startDatePicker" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                    <div class="filter-date">
                      <div class="calendar-container filter-calendar">
                        <input name="HiatusStartDate" placeholder="MM/dd/yyyy" ng-required="vm.isRequired" type="text" class="vui-input form-control filter-calendar-textbox filter-control-date ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty ng-valid-date ng-valid-required" uib-datepicker-popup="MM/dd/yyyy" alt-input-formats="vm.altInputFormats" min-date="vm.minDate" max-date="vm.maxDate" ng-model="vm.model" is-open="vm.isDateOpened" close-text="Close" ng-keypress="vm.onKeyPress($event)" ng-click="$event.preventDefault()" show-button-bar="false" datepicker-options="vm.dateOptions" date-disabled="vm.dateDisabled({date: date, mode: mode})" ng-model-options="vm.ngModelOptions" ng-disabled="vm.isDisabled()" ng-blur="vm.onBlur($event)">
                        <div uib-datepicker-popup-wrap="" ng-model="date" ng-model-options="ngModelOptions" ng-change="dateSelection(date)" template-url="uib/template/datepicker/popup.html" class="ng-not-empty ng-valid">
                          <!-- ngIf: isOpen -->
                        </div>
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-default calendar-button filter-calendar-button" ng-click="$event.preventDefault(); vm.isDateOpened = !vm.isDateOpened;">
                            <i class="icon-calendar glyphicon glyphicon-calendar"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </vui-date-picker>
                </div>
              </fieldset>
              <label style="width:10%">End Date
                <sup>*</sup>
              </label>
              <fieldset class="vui-form-element vui-m-right--large" style="width:20%">
                <div class="vui-form-element__control">
                  <vui-date-picker placeholder="'MM/dd/yyyy'" ng-model="endDatePicker" id="EndDate" name="HiatusEndDate" date-changed="$event.preventDefault();$event.stopPropagation();" date-disabled="disabledEndDates(date, mode)" min-date="startDate" data-ng-class="elementInvalid('endDate')" show-weeks="false" data-element-name="endDatePicker" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                    <div class="filter-date">
                      <div class="calendar-container filter-calendar">
                        <input name="HiatusEndDate" placeholder="MM/dd/yyyy" ng-required="vm.isRequired" type="text" class="vui-input form-control filter-calendar-textbox filter-control-date ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty ng-valid-date ng-valid-required" uib-datepicker-popup="MM/dd/yyyy" alt-input-formats="vm.altInputFormats" min-date="vm.minDate" max-date="vm.maxDate" ng-model="vm.model" is-open="vm.isDateOpened" close-text="Close" ng-keypress="vm.onKeyPress($event)" ng-click="$event.preventDefault()" show-button-bar="false" datepicker-options="vm.dateOptions" date-disabled="vm.dateDisabled({date: date, mode: mode})" ng-model-options="vm.ngModelOptions" ng-disabled="vm.isDisabled()" ng-blur="vm.onBlur($event)">
                        <div uib-datepicker-popup-wrap="" ng-model="date" ng-model-options="ngModelOptions" ng-change="dateSelection(date)" template-url="uib/template/datepicker/popup.html" class="ng-not-empty ng-valid">
                          <!-- ngIf: isOpen -->
                        </div>
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-default calendar-button filter-calendar-button" ng-click="$event.preventDefault(); vm.isDateOpened = !vm.isDateOpened;">
                            <i class="icon-calendar glyphicon glyphicon-calendar"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </vui-date-picker>
                </div>
              </fieldset>
              <div class="date-picker-toggle-section">
                <div class="btn-group">
                  <div class="vui-button" data-ng-click="selectAllWeeks()" style="cursor:pointer;">Select all weeks</div>
                  <div class="vui-button" data-ng-click="deselectAllWeeks()" style="cursor:pointer;">Deselect all weeks</div>
                </div>
              </div>
            </div>
            <div class="validation-summary-errors" style="margin: 2px;">
            </div>
            <div class="new-hiatus-module-nav-row vui-clearfix">
              <div class="hiatus-nav-section" data-ng-click="navClick(-3)" data-ng-class="leftNavSectionActiveCss();">
                <div class="vui-float--left">
                  <svg class="vui-button__icon" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Content/Images/icons.svg#icon-chevron-left"></use>
                  </svg>
                  <span>Previous</span>
                </div>
              </div>

              <div class="hiatus-nav-section" data-ng-click="navClick(3)" data-ng-class="rightNavSectionActiveCss()">
                <div class="vui-float--right">
                  <span>Next</span>
                  <svg class="vui-button__icon" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/Content/Images/icons.svg#icon-chevron-right"></use>
                  </svg>
                </div>
              </div>
            </div>
            <!-- ngRepeat: month in monthsToShow track by month.id -->
            <div data-ng-repeat="month in monthsToShow track by month.id" class="ng-scope">
              <table class="vui-table vui-no-row-hover" data-element-name="hiatusMonthTable">
                <thead>
                  <tr class="week-month-header-row">
                    <th class="week-th" rowspan="2">Week</th>
                    <th class="month-th ng-binding" data-element-name="monthHeader" colspan="7">November 2017
                    </th>
                  </tr>
                  <tr class="days-of-week-header-row week-month-header-row ">
                    <!-- ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Mon</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Tue</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Wed</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Thu</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Fri</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Sat</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <th style="cursor:pointer;" data-ng-repeat="ppc in planPeriodColumns" data-ng-click="dayOfWeekHeaderRowClick(month.monthNumber, ppc.field)" class="ng-binding ng-scope">Sun</th>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                  </tr>
                </thead>
                <tbody>
                  <!-- ngRepeat: week in month.weeks -->
                  <tr class="week-with-days-row ng-scope" data-ng-repeat="week in month.weeks" data-element-name="hiatusWeekRow">
                    <td data-ng-click="weekNumberClick(week)" style="cursor:pointer;" class="ng-binding">Week 1</td>
                    <!-- ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      06
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      07
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      08
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      09
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      10
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      11
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                    <td data-ng-repeat="ppc in planPeriodColumns" style="cursor:pointer;" data-ng-class="{selected : week.days[ppc.field].isSelected}" data-ng-click="dayOfWeekClick(week.days[ppc.field])" class="ng-binding ng-scope selected">
                      12
                    </td>
                    <!-- end ngRepeat: ppc in planPeriodColumns -->
                  </tr>
                  <!-- end ngRepeat: week in month.weeks -->
                </tbody>
              </table>
            </div>
            <!-- end ngRepeat: month in monthsToShow track by month.id -->

          </div>

          <div class="row pull-right" style="padding: 30px 10px 0 0;">
            <button class="vui-button vui-button--brand" name="submitButton" ng-show="!isBeingSubmitted" ng-disabled="!isValid()" data-ng-click="updateSubmitted();" disabled="disabled">Submit</button>
            <button class="vui-button vui-button--brand ng-hide" name="submitButton" ng-show="isBeingSubmitted" disabled="disabled">Submitting...</button>
            <button type="button" class="vui-button vui-button vui-button--neutral" data-ng-click="reload()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<style>
.new-hiatus-module .legend-row {
  margin-right: 0.25%;
  margin-left: 0.2%;
  margin-bottom: 2.5%;
  overflow: auto;
}

.new-hiatus-module .legend-row .legend-title {
  float: left;
  margin-right: 1%;
}

.new-hiatus-module .legend-row .legend-section {
  float: left;
  width: 8.5%;
}

.new-hiatus-module .legend-row .legend-box {
  height: 15px;
  width: 15px;
  float: left;
  background-color: #fff;
}

.new-hiatus-module .legend-row .selected {
  background-color: #cbe4eb;
}

.new-hiatus-module .legend-row .unselected {
  border: solid 1px #dbdee3;
}

.new-hiatus-module .date-picker-row {
  background-color: #dbdee3;
  padding: 10px;
  margin-right: 0.2%;
  margin-left: 0.2%;
  height: 4em;
  clear: both;
}

.new-hiatus-module .date-picker-row .date-picker-row-section {
  width: 30%;
  float: left;
  background-color: #dbdee3;
  margin-right: -3.25%;
}

.new-hiatus-module
  .date-picker-row
  .date-picker-row-section
  .date-picker-row-labels {
  font-size: 1.15em;
  line-height: 250%;
  width: 25%;
  border: none;
  display: inline;
  float: left;
}

.new-hiatus-module
  .date-picker-row
  .date-picker-row-section
  .date-picker-row-inputs {
  width: 60%;
  border: none;
  display: inline;
  float: left;
}

.new-hiatus-module .date-picker-row .date-picker-toggle-section {
  width: 100%;
}

.new-hiatus-module .date-picker-row .btn-group .vui-button {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  padding-left: 5px;
  padding-right: 5px;
}

.new-hiatus-module .date-picker-row .btn-group .vui-button:hover {
  color: #682566;
  border: solid 1px #682566;
  background-color: #fff;
}

.new-hiatus-module .on-valid {
  border: solid 1px #682566;
}

.new-hiatus-module .on-invalid {
  border: solid 1px #c5203e;
}

.new-hiatus-module .new-hiatus-module-nav-row {
  background-color: #dbdee3;
  padding: 10px;
  margin-right: 0.2%;
  margin-left: 0.2%;
  margin-top: 5px;
  overflow: auto;
  display: flex;
}

.new-hiatus-module .new-hiatus-module-nav-row .hiatus-nav-section {
  width: 50%;
  overflow: auto;
  cursor: not-allowed;
  color: #aaa;
}

.new-hiatus-module .new-hiatus-module-nav-row .nav-section-active {
  color: #682566;
  cursor: pointer;
}

.new-hiatus-module .new-hiatus-module-nav-row .hiatus-nav-button {
  background: #682566;
  color: white;
  padding: 2px;
}

.new-hiatus-module .new-hiatus-module-nav-row .hiatus-nav-button-disabled {
  background: #d7dadf;
}

.new-hiatus-module .week-month-header-row .week-th {
  width: 12.33%;
}

.new-hiatus-module .week-month-header-row .month-th {
  width: 87.66%;
  text-align: center;
}

.new-hiatus-module .inner-days-of-week-table {
  padding-left: 0.2%;
  padding-right: 0.2%;
  border-spacing: 0;
}

.new-hiatus-module .days-of-week-header-row th {
  text-align: center;
}

.new-hiatus-module .week-with-days-row td {
  text-align: center;
}

.new-hiatus-module .week-with-days-row td:first-of-type {
  text-align: left;
  color: #51545d;
  font-weight: bold;
}

.new-hiatus-module .week-with-days-row .selected {
  background-color: #cbe4eb;
  color: #51545d;
}

.hiatus {
  font-size: 14px;
  color: #51545d;
  background: #edf1f4;
  width: 880px;
}

.hiatus-header {
  padding-top: 10px;
  color: #ffffff;
  height: 45px;
  background: #51545d;
  text-align: center;
  border-bottom: 3px solid white;
  border-top: 3px solid white;
}

.hiatus-instructions {
  height: 40px;
}

.hiatus-months-row {
  height: 50px;
}

.hiatus {
  font-size: 14px;
  color: #51545d;
  background: #edf1f4;
}

.hiatus-header {
  color: #ffffff;
  height: 50px;
  background: #51545d;
  text-align: center;
}

.hiatus-body {
  margin: 20px;
  margin-bottom: 12px;
  overflow-x: hidden;
  overflow-y: auto;
}

.hiatus-nav-button-left {
  float: left;
}

.hiatus-nav-button-right {
  float: right;
  margin-left: 5px;
}

.hiatus-nav-button-disabled {
  background: #d7dadf;
}

.hiatus-months {
  float: left;
  height: 40px;
  border-bottom: solid 1px #682566;
}

.hiatus-month {
  float: left;
  width: 250px;
  height: 35px;
  background: white;
  overflow: auto;
  text-align: center;
  text-transform: uppercase;
  color: #692565;
  padding-top: 10px;
  margin-left: 5px;
  cursor: pointer;
}

.month-showing-weeks {
  background: #edf1f4;
  color: #692565;
  border-bottom: none;
  border-top: solid 1px #682566;
  border-left: solid 1px #682566;
  border-right: solid 1px #682566;
  height: 40px;
}

.hiatus-weeks {
  width: 100%;
}

.hiatus-week {
  text-align: center;
  cursor: pointer;
  margin-bottom: 7px;
  overflow: auto;
}

.hiatus-week-num {
  width: 49%;
  background: white;
  margin-right: 5px;
  float: left;
  height: 40px;
  padding-top: 10px;
}

.hiatus-week-dates {
  width: 49%;
  background: white;
  float: right;
  height: 40px;
  padding-top: 10px;
}

.week-selected {
  background: #4296b4;
  color: white;
  cursor: pointer;
}

.week-inactive,
.hiatus-month-inactive {
  background-color: #d7dadf;
  color: #51545d;
  cursor: default;
}

.vui-range-slider {
  display: inline-block;
  position: relative;
  height: 9px;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 1em;
  vertical-align: middle;
}

.vui-range-slider div {
  white-space: nowrap;
  position: absolute;
}

.vui-range-slider div.bar {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  border: solid 1px #cccccc;
}

.vui-range-slider div.bar .selection {
  width: 0;
  height: 100%;
  background: #682566;
}

.vui-range-slider div.handle {
  cursor: pointer;
  height: 13px;
  top: -2px;
  background-color: #682566;
  border: 3px solid #51545d;
  z-index: 2;
}

.vui-range-slider div.handle.active {
  background-color: #1d0a1c;
}

.vui-range-slider div.bubble {
  cursor: default;
  top: -21px;
  padding: 1px 6px 1px 6px;
  font-size: 0.8em;
  font-family: sans-serif;
  background-color: #682566;
  color: #fff;
}

.vui-range-slider div.bubble.active {
  display: inline-block;
}

.vui-range-slider div.bubble.limit {
  font-size: 12px;
  color: black;
  background-color: transparent;
  top: 11px;
}

.vui-range-slider div.bubble.limit.low {
  margin-left: -4px;
}

.typeahead-with-tags {
  border: 1px solid #d8dde6;
  float: left;
  border-radius: 0px;
  padding: 0.1em;
  padding-left: 0.5em;
  padding-right: 0;
  line-height: 1.875em;
  max-height: initial;
  overflow: visible;
  background-color: #fff;
}

.typeahead-with-tags .vui-tags {
  padding-left: 0.5em;
  margin-left: 0.25em;
  margin-right: 0.25em;
  text-align: center;
  border: solid 1px #dbdee3;
  height: 75%;
  cursor: pointer;
  display: inline-block;
}

.typeahead-with-tags .vui-tags i {
  color: #682566;
}

.typeahead-with-tags .vui-typeahead-with-tags-input {
  border: none;
}

.typeahead-with-tags .vui-typeahead-with-tags-input:focus {
  border: none;
  outline: none;
}

.typeahead-with-tags .on-invalid {
  border: solid 1px #c5203e;
}

.typeahead-with-tags .remove-tag-icon {
  margin: 0.5em;
}

.disabled-typeahead-with-tags {
  background: rgba(82, 84, 93, 0.15);
  cursor: not-allowed;
}

.disabled-typeahead-with-tags-input {
  background: none;
  cursor: not-allowed;
}

.station-list-wrapper .station-list-header {
  cursor: pointer;
  text-transform: uppercase;
}

.station-list-wrapper .station-list-header .station-list-plus-minus {
  font-size: 1.5em;
  color: #682566;
  vertical-align: middle;
}

.station-list-wrapper .station-list-header .station-list-label {
  vertical-align: top;
  font-size: 1.5em;
}

.errorText {
  color: #c5203e;
}

.inactive-link {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: #e1e1e1;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active {
  background-color: #682566;
  color: white;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
}

a.btn-primary,
a.btn-primary:hover,
a.btn-primary:active {
  padding-top: 10px;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:active {
  background-color: #f58220;
  color: white;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
  height: 40px;
}

.btn-preferences,
btn-preferences:hover,
.btn-preferences:active {
  background-color: #682566;
  color: white;
  border: none;
}

.preferences-cog {
  font-size: 25px;
  margin: 0 !important;
}

.buyer-dropdown {
  border: solid 1px #682566;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}

.disabled-dropdown {
  background: rgba(82, 84, 93, 0.15);
  border: solid 1px rgba(82, 84, 93, 0.5) !important;
  cursor: not-allowed;
}

.disabled-dropdown .dropdown {
  background: none !important;
  color: rgba(82, 84, 93, 0.5);
  cursor: not-allowed;
}

.disabled-dropdown a > div {
  cursor: not-allowed !important;
}

.disabled-dropdown a > div span {
  color: rgba(82, 84, 93, 0.6) !important;
}

.disabled-dropdown i {
  color: rgba(82, 84, 93, 0.5);
  cursor: not-allowed;
}

.day-disabled {
  background: rgba(82, 84, 93, 0.15);
  cursor: not-allowed;
}

.buyer-control-with-border_notop {
  border-left: solid 1px #682566;
  border-right: solid 1px #682566;
  border-bottom: solid 1px #682566;
  border-radius: 0px;
}

.buyer-control-with-border {
  border: solid 1px #682566;
  border-radius: 0px;
}

.buyer-expand-collapse-icon {
  color: #682566;
  margin-right: 0.4em;
  font-size: 16px;
  top: 0.2em;
  margin-left: 15px;
}

.div-buyer {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  width: 25%;
  background-color: #eeeeee;
  margin: 5px;
}

.div-buyer h4 {
  font-weight: bold;
}

.dayparts-above-table-row {
  width: 100%;
  background-color: #dbdee3;
  padding: 13px;
}

.dayparts-above-table-row input {
  max-width: 8em;
}

.dayparts-above-table-row .vui-button {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  padding-left: 5px;
  padding-right: 5px;
}

.dayparts-above-table-row .vui-button:hover {
  color: #682566;
  border: solid 1px #682566;
  background-color: #fff;
}

.daypart-table th {
  text-align: center;
}

.buyers-station-box {
  border: solid 1px #d8dde6;
  font-size: 150%;
  line-height: 200%;
  overflow: auto;
}

.buyers-station-box .buyers-station-row {
  margin-left: 0;
  margin-right: 0;
  border-bottom: solid 1px #e0e4e5;
}

.buyers-station-box .icons {
  line-height: normal;
}

.buyers-station-box .col-lg-4 label {
  font-weight: 300;
}

.buyers-station-box input[type='checkbox'],
.buyers-station-box input[type='radio'] {
  margin: 0;
  padding: 0;
  font-size: 0;
  opacity: 0;
}

.buyers-station-box input[type='checkbox'] + label,
.buyers-station-box input[type='radio'] + label {
  height: 0;
}

.buyers-station-row .target-share-box {
  padding: 0;
  line-height: 200%;
  font-size: 100%;
}

.target-share-box {
  padding: 0;
  line-height: 200%;
  font-size: 150%;
}

.target-share-grey {
  background-color: #52545d;
  color: white;
}

.target-share-orange {
  background-color: #f58220;
  color: white;
}

.selected {
  background-color: #4296b4;
  color: white;
}

.buyers-filter-controls {
  line-height: 50px;
  background-color: #e0e4e5;
  padding: 0px 22px;
}

.buyers-filter-controls .filter-positioner {
  display: table-cell;
  line-height: normal;
  height: 34px;
  margin: 18px 0px 0px 10px;
}

.buyers-filter-controls .buyers-date-range {
  margin: 18px 0px 10px 10px;
  line-height: normal;
}

.buyers-filter-controls .buyers-date-range input,
.buyers-filter-controls .buyers-date-range button {
  margin: 0;
  border: none;
}

.buyers-date-range {
  float: left;
}

.buyers-date-range .on-valid {
  border: solid 1px #682566;
}

.buyers-date-range .on-invalid {
  border: solid 1px #c5203e;
}

.buyers-date-range .filter-calendar {
  float: left;
  background-color: #fff;
  width: 133px;
  height: 34px;
  margin: 0 0 0 0px;
  position: relative;
}

.buyers-date-range .request-calendar {
  float: left;
  background-color: #fff;
  height: 34px;
  clear: both;
  position: relative;
}

.buyers-date-range .filter-calendar-textbox,
.buyers-date-range .filter-calendar-textbox:focus {
  width: 103px;
  height: 30px;
  float: left;
  border: none;
  margin-left: 0px;
}

.buyers-date-range .filter-calendar-button {
  float: right;
  border: none;
  overflow: hidden;
  height: 24px;
  padding: 5px 6px;
}

.buyers-date-range .filter-calendar-button-submit {
  float: left;
  background-color: #682566;
  width: 27px;
  height: 28px;
  margin: 5px 0 0 9px;
  cursor: pointer;
}

.buyers-date-range .filter-calendar-button-submit p {
  margin-top: 4px;
  text-align: center;
  color: #fff;
  font-weight: 300;
}

.buyers-date-range i {
  color: #ffffff;
  font-size: 16px;
}

.icon-copy {
  color: #682566;
  font-size: 18px;
}

.coming-soon {
  padding-top: 1em;
  font-size: 12em;
  font-weight: bold;
  font-family: 'Roboto Condensed';
  color: #52545d;
}

.videa-loader-bar {
  width: 100%;
  z-index: 5;
  text-align: center;
  padding-top: 15px;
  background: rgba(255, 255, 255, 0.95);
  height: 89px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.15);
}

.buyer-progress-step-text {
  text-transform: uppercase;
  font-size: 14pt;
  font-weight: bold;
  font-family: 'Roboto';
  color: #52545d;
}

.buyer-progress-step-description {
  text-transform: uppercase;
  font-size: 14pt;
  font-family: 'Roboto';
  color: #52545d;
}

.buyers-target-row {
  padding: 10px 0 30px 0;
}

.buyers-reviewavails-comment-box {
  height: 300px;
  width: 739px;
}

div.buyer-dropdown-sm-2 {
  border: solid 1px #682566;
  float: left;
  border-radius: 0px;
}

div.buyer-dropdown-sm-2 div.dropdown {
  background: #ffffff;
  float: left;
  width: 244px;
  border-radius: 0px;
}

div.buyer-dropdown-sm-2 div.dropdown .dropdown-toggle {
  text-decoration: none;
}

div.buyer-dropdown-sm-2
  div.dropdown
  .dropdown-toggle
  .dropdown-toggle-station-month {
  width: 255px;
  height: 27px;
}

div.buyer-dropdown-sm-2
  div.dropdown
  .dropdown-toggle
  .dropdown-toggle-station-month
  span {
  border-left: none;
  padding-right: 0;
  padding-left: 8px;
  margin-top: 0;
}

div.buyer-dropdown-sm-2
  div.dropdown
  .dropdown-toggle
  .dropdown-toggle-station-month
  i.icon-angle-down {
  margin: 5px;
}

div.buyer-dropdown-sm-2 div.dropdown ul {
  cursor: pointer;
}

div.buyer-dropdown-sm-2 div.dropdown a {
  text-decoration: none;
}

div.buyer-dropdown-sm-2 div.dropdown a div {
  width: 245px;
  cursor: pointer;
  height: 25px;
}

div.buyer-dropdown-sm-2 div.dropdown a div span {
  float: left;
  font-size: 13px;
  color: #51545d;
  padding: 0 0 0 0.8em;
  margin-top: 0.1em;
  width: 223px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline;
}

div.buyer-dropdown-sm-2 div.dropdown a div i {
  font-size: 18px;
  float: right;
  margin: 1px 10px 0 0;
}

div.buyer-dropdown-sm-2 .dropdown-menu {
  padding: 0;
  border: 2px solid #682566;
  top: 190%;
  min-width: 255px;
  margin-left: -10px;
}

div.buyer-dropdown-sm-2 .dropdown-menu i.icon-triangle-up {
  color: #682566;
  position: absolute;
  top: -14px;
  font-size: 19px;
  left: 230px;
}

div.buyer-dropdown-sm-2 .dropdown-menu > li > a:hover {
  color: #fff;
  background-color: #682566;
}

div.buyer-dropdown-sm-2 .dropdown-menu-timeframe {
  top: 140%;
}

div.buyer-dropdown-sm-1 {
  margin-left: 10px;
  margin-bottom: 10px;
  border: solid 1px #682566;
  float: left;
  width: 142px;
  margin-top: 18px;
  border-radius: 0px;
}

div.buyer-dropdown-sm-1 div.dropdown {
  background: #ffffff;
  float: left;
  width: 126px;
  border-radius: 0px;
}

div.buyer-dropdown-sm-1 div.dropdown .dropdown-toggle {
  text-decoration: none;
}

div.buyer-dropdown-sm-1 div.dropdown ul {
  cursor: pointer;
}

div.buyer-dropdown-sm-1 div.dropdown a {
  text-decoration: none;
}

div.buyer-dropdown-sm-1 div.dropdown a div {
  width: 132px;
  cursor: pointer;
}

div.buyer-dropdown-sm-1 div.dropdown a div span {
  float: left;
  font-size: 13px;
  color: #51545d;
  padding: 0 0 0 0.8em;
  margin-top: 0.1em;
  overflow-x: hidden;
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

div.buyer-dropdown-sm-1 div.dropdown a div i {
  font-size: 18px;
  float: right;
  margin: 1px 10px 0 0;
}

div.buyer-dropdown-sm-1 .dropdown-menu {
  padding: 0;
  border: 2px solid #682566;
  top: 190%;
  min-width: 142px;
  margin-left: -10px;
}

div.buyer-dropdown-sm-1 .dropdown-menu i.icon-triangle-up {
  color: #682566;
  position: absolute;
  top: -14px;
  font-size: 19px;
  left: 117px;
}

div.buyer-dropdown-sm-1 .dropdown-menu > li > a:hover {
  color: #fff;
  background-color: #682566;
}

div.buyer-dropdown-sm-1 .dropdown-menu-timeframe {
  top: 140%;
}

.buyer-field-error {
  border: 2px solid red;
}

.buyer-field-validation {
  background-color: #c5203e;
  color: #ffffff;
  font-size: 13px;
  clear: both;
  overflow: hidden;
}

.buyer-field-validation:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.buyer-field-validation ul {
  list-style-type: none;
  margin-top: -10px;
  margin-left: -20px;
}

.buyer-field-validation ul li {
  margin-left: -15px;
}

.spot-length-padding {
  padding: 7px;
}

.demo-radio-buttons input[type='radio'] {
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.demo-radio-buttons input[type='radio']:checked + label {
  /* background: url(images/purple-border-radio-button-checked-3a6d33a1.png) no-repeat 0 0; */
}

.demo-radio-buttons input[type='radio'] + label {
  display: inline-block;
  margin-left: -20px;
  margin-right: 20px;
  padding-left: 30px;
  /* background: url(images/purple-border-radio-button-3ef8a352.png) no-repeat 0 0; */
  line-height: 22px;
  font-size: 16px;
}

.expand-collapse-icon {
  margin-right: 0.4em;
  font-size: 16px;
  top: 0.2em;
  margin-left: 0px;
}

.small-text-checkbox {
  font-size: 13px;
}

.buyer-political-frame {
  height: 400px;
  border: 1px solid #d8e0e3;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
}

.buyer-political-frame iframe {
  width: 100%;
  border: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.buyer-political-frame .buyer-political-frame-header {
  background: #51545d;
  color: #ffffff;
  border: 1px solid #51545d;
}

.buyer-political-frame .buyer-political-frame-header h4 {
  float: left;
  font-weight: 200;
  margin-left: 5px;
}

.buyer-political-frame .buyer-political-frame-header .frame-larger {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  float: right;
  color: #ffffff;
  font-weight: 200;
  height: 40px;
  width: 120px;
  padding: 0 5px;
  border: none;
  background: #51545d;
}

.buyer-political-frame
  .buyer-political-frame-header
  .frame-larger
  span.glyphicon {
  margin-right: 5px;
}

.buyer-political-frame .buyer-political-frame-header .frame-larger:hover {
  background: #707277 !important;
}

.buyer-political-frame .ng-modal-dialog {
  margin: 0;
}

.buyer-political-frame .ng-modal-dialog .ng-modal-dialog-content {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
}

.buyer-political-frame .ng-modal-dialog .ng-modal-dialog-content .modal-title {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

.buyer-political-frame .ng-modal-dialog .ng-modal-dialog-content .modal-table {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.buyer-political-frame
  .ng-modal-dialog
  .ng-modal-dialog-content
  .modal-table
  iframe {
  min-height: 100%;
}

html {
  background-color: #f4f6f9;
}

.vui-button--can-be-focused:focus {
  outline: 1px solid currentColor;
}

.vui-text-link,
.vui-text-link:hover,
.vui-text-link:focus {
  color: #0177a2;
  text-decoration: none;
}

.text-red {
  color: #c5203e;
}

.text-bold {
  font-weight: 700;
}

.vui-badge.badge--dev-ready {
  border-radius: 0.125rem;
}

.vui-icon.inactive {
  opacity: 0.5;
}

.vui-theme--dark {
  background-color: #51535c;
  color: white;
  border-color: #51535c;
}

.vui-checkbox .glyphicon,
.dropdown-toggle .icon-angle-down {
  color: #692565;
}

.buyer-email-input {
  border: none;
}

.buyer-email-input:focus {
  outline: none;
}

.password-validator .password-validation-decoration {
  color: #0177a2;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

input[type='number']:invalid {
  box-shadow: none;
}

.vui-sort {
  opacity: 0.5;
}

.vui-sort.active {
  opacity: 1;
}

.vui-star--after::after {
  content: '*';
  position: relative;
  top: -0.5em;
  font-size: 75%;
  color: #f4831f;
  line-height: 0;
  vertical-align: baseline;
}

.station-selector .vui-dropdown__item a {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.vui-table th,
.vui-table td,
.vui-table tr,
.vui-table tbody {
  background-clip: padding-box;
}

.vui-highlight {
  background-color: #f0f7f9;
  background-color: #f4f6f9;
}

.vui-highlight--videa {
  background-color: #f0f7f9;
}

.uib-day button.active .text-info {
  color: white;
}

.uib-day button:disabled {
  background: #e0e4e5;
  border-color: #fff;
}

/* Styles for Datepicker START */

/* Ideally these styles should merged with existing (not just copied) */

.uib-weeks td:first-child {
  padding: 0;
  border: none;
}

.uib-daypicker thead tr:last-child th:first-child::after {
  content: '';
}

/* Align datepicker next to icon */

.uib-datepicker-popup {
  left: auto !important;
  right: 0 !important;
  -webkit-transform: translateX(45%);
  -ms-transform: translateX(45%);
  transform: translateX(45%);
}

/* Explicitly set styles for 3 kinds of datapicker */

table.uib-daypicker td,
table.uib-daypicker th,
table.uib-monthpicker td,
table.uib-monthpicker th,
table.uib-yearpicker th,
table.uib-yearpicker td {
  padding: 0;
  border: none;
  background: #fff;
}

/* Reset styles for buttons at table header */

.uib-daypicker th button,
.uib-monthpicker th button,
.uib-yearpicker th button {
  min-width: 100%;
  background-color: white;
  border: none;
}

/* Set names of days to bold */

.uib-daypicker tr:last-child th {
  font-weight: 600;
}

/* Remove outline from table */

.uib-daypicker,
.uib-monthpicker,
.uib-yearpicker {
  outline: none;
}

/* No need to display cursor as a pointer if element is not clickable */

.uib-datepicker thead tr:nth-child(2),
.uib-weeks .h6 {
  cursor: default;
}

/* Decrease the size of cells */

.uib-day button,
.uib-month button,
.uib-year button {
  line-height: 32px;
}

/* Set month picker to have fixed button width */

.uib-month button {
  width: 86px;
}

/* Add hover to all kinds of datepicker */

.uib-day button:hover,
.uib-month button:hover,
.uib-year button:hover {
  border: 1px solid #692565;
}

/* Styles for Datepicker END */

/* Fix for Loading Widget */

#loadingWidget {
  position: fixed;
  z-index: 9999;
}

/* the browser renders a newline as space - this creates an issue with layout */

.fix-html-empty-spaces {
  font-size: 0;
}

/* Price guide shaded background*/

.shaded {
  background-color: #eeeeee;
}

.vui-table tr.with-row-span,
.vui-table tr.with-row-span td {
  height: 41px;
}

/* Bordered fieldset with optional label */

.vui-fieldset {
  padding: 5px;
  border: solid 1px #a9aeb9;
  position: relative;
}

.vui-fieldset > .vui-fieldset-header {
  position: absolute;
  z-index: 100;
  top: -15px;
  left: 0;
  right: 0;
}

.vui-fieldset > .vui-fieldset-header label {
  font-size: 0.85rem;
  background: white;
}

/* Helper classes which are used to set display: block or inline.
   Class vui-show and vui-show--inline-block are doing the same but naming is not correct for such cases */

.vui-display--block {
  display: block;
}

.vui-display--inline-block {
  display: inline-block;
}

.vui-overflow--hidden {
  overflow: hidden;
}

/* Class for emphasize some pieces of text by grey color. We had many such cases before, and had to use inline styles */

.vui-text-grey,
.vui-text-grey:hover {
  color: #cccccc;
}

/* Class for making custom tables */

.vui-no-border-right {
  border-right: 0 !important;
}

.vui-no-border-left {
  border-left: 0 !important;
}

/* Angular-resizable Customization
for resizable blocks */

.resizable {
  min-width: 25px;
  min-height: 25px;
  padding-right: 3px;
  padding-bottom: 3px;
}

.resizable textarea {
  width: 100%;
  height: 100%;
  resize: none;
}

/* Bug because of z-index, must be higher than 1*/

.uib-datepicker-popup.dropdown-menu {
  z-index: 2;
}

/*item-actions*/

.item-actions {
  font-size: 1.8em;
  position: relative;
}

.item-actions span {
  cursor: pointer;
  margin-left: 5px;
}

.item-actions span[disabled] {
  cursor: initial;
  opacity: 0.3;
}

.vui-badge.recalled {
  color: white;
  background-color: #c5203e;
  border-radius: 0.125rem;
}

/* For pointer elements, but not links */

.vui-cursor-pointer {
  cursor: pointer;
}

/* For default horizontal scroll */

.vui-scrollable-default--x {
  max-width: 100%;
  overflow: auto;
}

/* remove padding */

.vui-no-padding {
  padding: 0 !important;
}

/* for status icons backgrounds */

.vui-background--danger {
  background-color: #c5203e;
}

.vui-background--warning {
  background-color: #f58220;
}

.vui-background--info {
  background-color: #62afba;
}

.vui-background--success {
  background-color: #5cb85c;
}

span.environment {
  position: absolute;
  left: 18rem;
  top: 1rem;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.3);
}
</style>
