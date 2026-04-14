import React from 'react';

const FriendDetailsPage = async({params}) => {
    const data = await params;
    console.log("data",data)
    return (
        <div>
            <h2>Friend Details is coming Soon.... </h2>
        </div>
    );
};

export default FriendDetailsPage;