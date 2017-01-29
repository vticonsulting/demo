## EOM

What is EOM (External Order Management)
  - Videa Order Management History
  - Request from Ops
  - Overview
  - What EOM is NOT
Menu changes
  - Order Management and Reporting are separate menu items
  - Pending Orders/Pending Makegoods -- Action Items (Dashboards currently)
  - Open Preempts
  - Order Search
Training
  - Open Preempts Screen Review
  - How to search form an order
  - How to view an order/order lines
  - Different types of makegoods
  - Building a Makegood
  - Offers tab in Orders
  - New Sales Reps tab in Station settings

logged in as a seller

Order Management (VOM Orders)
 - Pending Orders ()
 - Active Orders Dashboard (Read Only)
    each row represent an order
    - Active Order Details (Available to Reps) -- Order
      Makegood Number clickable
        P - Spots Run Not Ordered (Missed Spots)
        eBiz History
            Transaction History
            Revision History

- Reporting Campaign (Traffic)
- Open Preempts -- Date Range
    Reps only see what they are assigned to.
    Read only -- To surface all of the open preempts
    Each row repesents one pre-empt


testwfox@videa.tv
https://videaddqasttn01.cmg.int:8090


Buyers Buyline

Makegood -- Select some missed spots...
Credit --
Bonus -- nothing to do with current lines (no preempts, just 2 tables)
Program Change --
MG Preempts -- Select in expanded

    3 TABs tables
    missed
    offered
    search through station avails


## Station Groups
  + Cox Media Group
    * Atlanta
      - WSBTV
    * Charlotte
      - WSOC
      - WAXN
    * Orlando - Daytona Beach - Melborne
      - WRDQ
      - WFTV
    * Jacksonville
      - WFOX
      - WJAX
    * Tulsa
      - KOKI
      - KMYT
    * Seattle-Tacoma
      - KIRO
  + Graham
    * Jacksonville
      - WJXT
    * Orlando
      - WKMG
  + Griffin Communications
    * Tulsa
      - KOTV
      - KQCW
  + Hearst
    * Milwaukee
      - WISN
    * Orlando-Daytona Bch-Melbrn
      - WKCF
  + Raycom
    * Birmingham
      - WBRC
    * Charlotte
      - - WBTV
    * Cleveland-Akron (Canton)
      - WOIO
      - WUAB
    * New Orleans
      - WVUE
  + Scripps
    * Bakersfield
      - KERO
    * Cincinnati
      - WCPO
    * Cleveland
      - WEWS
    * Denver
      - KMGH
    * Ft. Myers-Naples
      - WFTX
    * Indianapolis
      - RTV6
    * Phoenix (Prescott)
      - KNXV
    * Las Vegas
      - KTNV
    * Tampa-St. Pete (Sarasota)
      - WFTS
    * Milwaukee
      - WTMJ
    * San Diego, CA
      - KGTV
    * West Palm Beach-Ft. Pierce
      - WPTV
  + Tegna (Gannett)
    * Atlanta
      - WATL
      - WXIA
    * Cleveland-Akron (Canton)
      - WKYC
    * Charlotte
      - WCNC
    * Buffalo
      -  WGRZ
    *  Jacksonville
      -  WJXX
      -  WTLV
    *  Seattle-Tacoma
      -  KING
      -  KONG
    *  New Orleans
      -  WUPL
      -  WWL

## Content Types

> A content type is a reusable container for managing content
> by common structure and purpose.

All content types have _attributes_, or _properties_. Each property has a name and datatype. The datatype indicates what kind of information can be stored in that property

Name|Type
- photo Image
- description Text(plain, long)
- length Number (Decimals) meters
- speed Number (Decimal) km/sec
- weight Number (Decimal) kg
- width Number
- height Number
- serviceYear Number (Whole)
- craftType entityReference (Craft Type)
- spacecraftName Text (plain)



## Entities
  + Proposals (Avails)
  + Orders
  + Makegoods
  + Programs
  + Prices
  + Buyer Ratings
  + Rates
  + Dayparts
  + Daypart Goals
  + Buyer Specs

## Product Design Principles
  + Simplicity
  + Elegance
  + Beauty
  + Clarity

## Product Development Team
  + Bill McClain
  + Craign Wilson
  + David Lee
  + David Oshin
  + Dawn
  + Jennifer Skipper
  + Jerome Thompson
  + Kahlil Branton
  + Kara Womack
  + Mackenzie Baines
  + Matt Hand
  + Phil Greco
  + Renee Nelson
  + Rokeia Gravely
  + Ruth Kim
  + Tom Powers
  + Victor Tolbert
  + Danielle Paulet
  + Holli Smith
  + Ron Curtis

## Stations
  + WFOX
  + WISN
  + WGRZ
  + WJXX

## Market
  + Jacksonville
  + Milwaukee
  + Buffalo
  + Jacksonville

## Jobs
  + Nielsen Daily ETL
  + Nielsen Monthly ETL
  + Rating Forecast Overnights
  + Videa Super Snapshot -- Master IMS Sync
  + Videa Super Snapshot -- Master Snapshot Sync

<style>
    @reset-global pc;

    :root {
      --color: red;
    }

    div {
      color: var(--color);
    }

    @custom-selector :--heading h1, h3, h3, h4, h5, h6;

    article :--heading + p {
      margin-top: 0;
    }

    @custom-media --small-viewport (max-width: 30em);

    @media (--small-viewport) {
      /* styles for small viewport */
    }

    p:matches(:first-child, .special) {
      color: red;
    }

    p:not(:first-child, .special) {
      color: red;
    }


    .icon {
        size: 48px;
    }

    .banner {
        position: fixed 0 0 *;
    }

    .canvas {
        color: #abccfc #212231;
    }

    .heading {
        font-size: 1.25em 2;
    }

    .rect-a {
      rect: 30px 50px #ff0;
    }
    .rect-b {
      rect: 30px * #ff0;
    }

    .circle-a {
      circle: 50px #ff0;
    }
    .circle-b {
      circle: 50px *;
    }

    .triangle-a {
      triangle: 5px top #ff0;
    }

    .ellipsis {
      @utils-ellipsis;
    }
    .ellipsis2 {
      @utils-ellipsis 3;
    }

    .clearfix {
      @utils-clearfix;
    }
    .irt {
      @utils-irt;
    }

    .usn {
      @utils-user-select none;
    }

    .disabled {
      @utils-disabled #ccc #f00 #333;
    }

    .vam-box {
      @utils-vertical-center;
    }

    .sky {
      margin: 2.5rem 2px 3em 100%;
      color: blue;
    }

    @media screen and (min-width: 20rem) {
      .leaf {
        margin-bottom: 1.333rem;
        font-size: 1.5rem;
      }
    }

    /* before */
    .table {
      @reset-nested tabel;
    }
    .table th,
    .table td {
      @reset-nested tabel-cell;
    }
    ul, ol {
      @reset-nested list;
    }
    .regular-font {
      @reset-nested font;
    }
    .box {
      @reset-nested boxModel;
    }
</style>
