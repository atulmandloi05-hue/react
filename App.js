import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * Heading component
 *  - Logo
 *  - Nav Bar
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *    - Restaurant Card
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address   
 */


const resList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1053783",
                    "name": "Honest Bowl",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/24/5a26aa89-ea7c-4be3-9caf-cf9c45108c82_0d225cf3-794d-418e-858c-d15a7aadd1f1.jpeg",
                    "locality": "Jakkasandra",
                    "areaName": "Hsr Layout 5th Sector",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "North Indian",
                        "High Protein",
                        "Biryani"
                    ],
                    "avgRating": 4,
                    "parentId": "612552",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "47",
                    "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-30 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "High%20Protein/rx%20tag%205.png",
                                "description": "High Protein"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "High%20Protein/rx%20tag%205.png",
                                            "description": "High Protein"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1053783&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "340645",
                    "name": "RNR Biryani - Taste of 1953",
                    "cloudinaryImageId": "jhdven0c7dkmypffoigf",
                    "locality": "4th B Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Biryani",
                        "South Indian",
                        "Kebabs"
                    ],
                    "avgRating": 4.4,
                    "parentId": "11620",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "8.6K+",
                    "promoted": true,
                    "adTrackingId": "cid=38cf81e7-7b84-4200-a2af-d57afc30b0cb~p=5~adgrpid=38cf81e7-7b84-4200-a2af-d57afc30b0cb#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=340645~plpr=COLLECTION~eid=add128ab-dff1-4b07-b164-bfb1c895368f~srvts=1767082372367~collid=83639",
                    "sla": {
                        "deliveryTime": 10,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "5-10 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "38cf81e7-7b84-4200-a2af-d57afc30b0cb"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=340645&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "108097",
                    "name": "Ambur Star Briyani Since 1890",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",
                    "locality": "2nd Stage",
                    "areaName": "BTM Layout",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Chettinad",
                        "Andhra",
                        "Beverages",
                        "Seafood"
                    ],
                    "avgRating": 4.4,
                    "parentId": "21400",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "24K+",
                    "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹39",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=108097&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "229",
                    "name": "Meghana Foods",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/12/29/57bebf52-5a58-42e0-af9d-3d872d52de83_2d89d14b-3568-4be1-946d-1d7b0539edae.jpg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Andhra",
                        "South Indian",
                        "Chinese",
                        "Seafood"
                    ],
                    "avgRating": 4.6,
                    "parentId": "635",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "194K+",
                    "promoted": true,
                    "adTrackingId": "cid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01~p=7~adgrpid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~plpr=COLLECTION~eid=b6598ae4-fc02-4d80-8301-1ccb6dba931e~srvts=1767082372368~collid=83639",
                    "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "21K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "7755cb3e-edc4-4923-ab24-d4b8b3bf8c01"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "375041",
                    "name": "Andhra Gunpowder",
                    "cloudinaryImageId": "janhgjevj4xnyyg5htnv",
                    "locality": "6th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Andhra",
                        "Biryani",
                        "South Indian"
                    ],
                    "avgRating": 4.5,
                    "parentId": "10496",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "6.5K+",
                    "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=375041&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "979759",
                    "name": "Imperio Restaurant Since 2010",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/7/538aed46-6879-44c8-8b64-019df866e53e_2d0d7b04-96e1-4c08-8a72-41805dd53152.jpg",
                    "locality": "5th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "South Indian",
                        "Tandoor",
                        "Beverages",
                        "Ice Cream",
                        "North Indian",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "659939",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "2.7K+",
                    "promoted": true,
                    "adTrackingId": "cid=f7b8162a-a283-4c35-9599-144e6757ee3f~p=8~adgrpid=f7b8162a-a283-4c35-9599-144e6757ee3f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=979759~plpr=COLLECTION~eid=b245cfc9-96ce-4d35-897d-843b78f38241~srvts=1767082372368~collid=83639",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 04:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹109",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "f7b8162a-a283-4c35-9599-144e6757ee3f"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=979759&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1155385",
                    "name": "GharSe - Homestyle & Healthy Tiffins",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/9/32502ec6-e679-4d14-b62c-3c8789887c02_1155385.JPG",
                    "locality": "6TH BLOCK",
                    "areaName": "Koramangala",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Biryani",
                        "Thalis",
                        "Home Food"
                    ],
                    "avgRating": 4.5,
                    "parentId": "663389",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "64",
                    "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 02:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹98",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1155385&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "18973",
                    "name": "Nandhana Palace",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Andhra",
                        "South Indian",
                        "North Indian"
                    ],
                    "avgRating": 4.4,
                    "parentId": "2120",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "41K+",
                    "promoted": true,
                    "adTrackingId": "cid=c80e6138-68ff-44f5-be6c-8cf3532cc48f~p=9~adgrpid=c80e6138-68ff-44f5-be6c-8cf3532cc48f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18973~plpr=COLLECTION~eid=07c7121c-17f2-451f-be4b-3d0b63be7efc~srvts=1767082372368~collid=83639",
                    "sla": {
                        "deliveryTime": 11,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            },
                            {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "10K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "c80e6138-68ff-44f5-be6c-8cf3532cc48f"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=18973&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1201086",
                    "name": "1881 Dum House: Lucknow's Legacy",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/10/13/9d4313dc-e72c-4915-a52d-ae411890ae62_9ae0f4a1-e997-43c2-8140-6716ad568024.jpg",
                    "locality": "6TH BLOCK",
                    "areaName": "Koramangala",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Awadhi"
                    ],
                    "avgRating": 4.3,
                    "parentId": "687728",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "62",
                    "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 02:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹98",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1201086&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "409544",
                    "name": "Madras Meal Company",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/12/70b8b399-878b-482d-8e2e-d391f9a74062_c9e54f05-1ce7-4cd2-8604-76d8d1f800cd.jpg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Chettinad",
                        "South Indian"
                    ],
                    "avgRating": 4.4,
                    "parentId": "128893",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "591",
                    "promoted": true,
                    "adTrackingId": "cid=cca91616-9a49-44b5-b752-c0cd87073210~p=12~adgrpid=cca91616-9a49-44b5-b752-c0cd87073210#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=409544~plpr=COLLECTION~eid=54f76eb1-4389-4fa3-8400-bfddfb7d55c9~srvts=1767082372368~collid=83639",
                    "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-31 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹179",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "cca91616-9a49-44b5-b752-c0cd87073210"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=409544&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "793210",
                    "name": "Aattutheeram Kerala Restaurant",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/31/ed8dfc53-7338-46c4-8493-df00ff845888_b75d61b3-593a-45bf-b0cd-ac1b7aea49be.jpg",
                    "locality": "Thippiah Layout",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Kerala",
                        "Biryani",
                        "Chinese",
                        "Snacks",
                        "Seafood",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "21348",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "900",
                    "sla": {
                        "deliveryTime": 12,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-30 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "UPTO ₹65",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=793210&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "944778",
                    "name": "Dindigul Ponram Biriyani",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/22/8e7f2350-3747-4fcb-b5d1-0a8ad911a6b8_95ff7e1b-d7cc-48b8-a8da-a8f7d735e31d.jpeg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹1500 for two",
                    "cuisines": [
                        "South Indian",
                        "briyani"
                    ],
                    "avgRating": 4,
                    "parentId": "553782",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "867",
                    "promoted": true,
                    "adTrackingId": "cid=d9f61261-d4fc-4dfb-acb7-0acfd74b08d3~p=13~adgrpid=d9f61261-d4fc-4dfb-acb7-0acfd74b08d3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=944778~plpr=COLLECTION~eid=3eea2c31-8be4-45fc-95ba-ad90d6eb648e~srvts=1767082372368~collid=83639",
                    "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-30 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.5",
                            "ratingCount": "2.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "d9f61261-d4fc-4dfb-acb7-0acfd74b08d3"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=944778&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1143060",
                    "name": "Al Daaz",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/24/c7f43704-d9c8-4214-a303-d2e7f5b9975e_e6cfbb04-92f4-42a0-913d-21fe2a094e04.png_compressed",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Biryani",
                        "Arabian",
                        "Barbecue"
                    ],
                    "avgRating": 4.5,
                    "parentId": "21640",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "1.0K+",
                    "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-30 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1143060&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://marketplace.canva.com/EAE7AbTaQUs/1/0/1600w/canva-good-food-nature-food-logo-design-for-healthy-food-business-IFvRyzRdJhI.jpg" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    console.log("Props:", props);   
    const { resName } = props;
    const {name,cuisines ,costForTwo , avgRating ,cloudinaryImageId ,sla} = resName?.card?.card?.info

    return (
        <div className="res-card">
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant-logo" />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.card.card.info.id} resName={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);