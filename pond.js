Vue.createApp({
    data() {
        return {
            fishPopulation: 100,
            playerCount: 10,
            techFrontier: 3,
            fertilityRate: 50,
            caughtFish: 0
        };
    },
    methods: {
        calculatePopulation() {
            this.fishPopulation = this.fishPopulation - this.caughtFish + Math.floor((this.fishPopulation - this.caughtFish) * this.fertilityRate / 100);
        }
    },
    computed: {
        longTermBalance() {
            return (this.playerCount * this.techFrontier) / (this.fertilityRate / 100) + (this.playerCount * this.techFrontier);
        },
        recommendation() {
            let result = 0;
            while (true) {
                if (result * this.playerCount > (this.fishPopulation - result * this.playerCount) * this.fertilityRate / 100)
                    return result - 1 < this.techFrontier ? result - 1 : this.techFrontier;
                result++;
            }
        },
        calculatedRecommendation() {
            return this.fishPopulation / (this.playerCount * 100 / this.fertilityRate + this.playerCount);
        }

    }
}).mount("#pond");