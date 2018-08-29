const Constants = require('./constants.js');
const math = require('mathjs');

class WaterLog {
    constructor(firebaseAdmin, timeManager) {
        this.firebaseAdmin = firebaseAdmin;
        this.timeManager = timeManager;
    }

    saveLoggedWater(assistantUserId, loggedWater) {
        let mililiters = 0;
        mililiters = loggedWater.amount;
        /*if (loggedWater.unit === "USD") {
            mililiters = loggedWater.amount * 100;
        } else if (loggedWater.unit === "cts") {
            mililiters = loggedWater.amount;
        } else if (loggedWater.unit === "MXP") {
            mililiters = math.round(loggedWater.amount * Constants.OZ_TO_ML);
        }*/

        const waterLogData = {
            userId: assistantUserId,
            mililiters: mililiters,
            timestamp: Date.now()
        };

        const newWaterLogKey = this.firebaseAdmin.database().ref().child('waterLogs').push().key;
        this.firebaseAdmin.database()
            .ref('waterLogs/' + newWaterLogKey)
            .set(waterLogData);
    }

    getLoggedWaterForUser(assistantUserId) {
        return Promise.resolve(
            this.firebaseAdmin.database()
                .ref('waterLogs')
                .orderByChild("userId").equalTo(assistantUserId)
                .once('value')
        ).then(waterLogs => {
            let loggedMililiters = 0;
            return this.timeManager.getTodayStartTimestampForAssistantUser(assistantUserId).then(todayStartsAt => {
                waterLogs.forEach(waterLog => {
                    if (waterLog.val().timestamp >= todayStartsAt) {
                        loggedMililiters += waterLog.val().mililiters;
                    }
                });
                //return math.round(loggedMililiters);
                return loggedMililiters;
            });
        });
    }
}

module.exports = WaterLog;
