import reactDom from "react-dom/client";
import { HeaderComponent } from "./App";

{
    "info"; {
        "id"; "442828",
            "name"; "The Dessert Heaven - Pastry, Brownie and Cakes",
                "cloudinaryImageId"; "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/b9bdea2e-10af-4e51-9aad-04658fe73b72_442828.JPG",
                    "locality"; "Congress House Road",
                        "areaName"; "Ghole Road",
                            "costForTwo"; "₹200 for two",
                                "cuisines";[
                                    "Bakery",
                                    "Desserts",
                                    "Sweets",
                                    "Ice Cream"
                                ],
                                    "avgRating"; 4.4,
                                        "veg"; true,
                                            "parentId"; "506176",
                                                "avgRatingString"; "4.4",
                                                    "totalRatingsString"; "100+",
                                                        "sla"; {
            "deliveryTime"; 24,
                "lastMileTravel"; 1.4,
                    "serviceability"; "SERVICEABLE",
                        "slaString"; "20-25 mins",
                            "lastMileTravelString"; "1.4 km",
                                "iconType"; "ICON_TYPE_EMPTY";
        }
        "availability"; {
            "nextCloseTime"; "2024-05-19 00:00:00",
                "opened"; true;
        }
        "badges"; {
            "imageBadges";[
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ];
        }
        "isOpen"; true,
            "type"; "F",
                "badgesV2"; {
            "entityBadges"; {
                "imageBased"; {
                    "badgeObject";[
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ];
                }
                "textBased"; {
                }
                "textExtendedBadges"; {
                }
            }
        }
        "aggregatedDiscountInfoV3"; {
            "header"; "60% OFF",
                "subHeader"; "UPTO ₹120";
        }
        "differentiatedUi"; {
            "displayType"; "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails"; {
                "mediaType"; "ADS_MEDIA_ENUM_IMAGE",
                    "lottie"; {
                }
                "video"; {
                }
            }
        }
        "reviewsSummary"; {
        }
        "displayType"; "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo"; {
        }




        const burgerking = {
            name: "Burger King",
            Image: "data:image/jpeg;base64,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",
            Cusine: ["burger", "Amrican"],
            rating: "4.5",
        };
        const RestrauntCard = () => {
            return (
                <div className="card">
                    <img src={burgerking.Image} />
                    <h2>{burgerking.name}</h2>
                    <h3>{burgerking.Cusine.join(",")}</h3>
                    <h4>{burgerking.rating} Stars</h4>
                </div>
            );
        };
        const Body = () => {
            return (
                <div className="restuarant-List">
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />
                    <RestrauntCard />




                </div>
            );
        };
        const Footer = () => {
            return <h5>Footer</h5>;
        };
        const AppLayout = () => {
            return (
                <div>
                    <HeaderComponent />
                    <Body />
                    <Footer />

                </div>
            );
        };

        const root = reactDom.createRoot(document.getElementById("root"));
        root.render(<AppLayout />);
    }
}
