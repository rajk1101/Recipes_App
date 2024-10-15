import React from "react";
import { Image, View } from "react-native";
import styles from "./style";

const Rating = ({ rating }) => {
    const arr = [1, 2, 3, 4, 5];

    // Renders stars based on the rating value
    const renderStar = () => {
        return arr.map((star) => {
            if (Math.round(rating) >= star) {
                return (
                    <Image
                        key={star}
                        style={styles.star}
                        source={require("../../../assets/Star.png")}
                    />
                );
            } 
            return (
                <Image
                    key={star}
                    style={styles.star}
                    source={require("../../../assets/EmptyStar.png")} // Use a placeholder or empty star image
                />
            );
        });
    };

    return <View style={styles.row}>{renderStar()}</View>;
};

export default React.memo(Rating);
