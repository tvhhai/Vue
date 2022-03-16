<template>
  <div>
    <h6>{{ $t("weatherDetail") }}</h6>
    <div class="detail-item">
      <div class="title">{{ $t("pressure") }}</div>
      <div class="unit">{{ getCurrentWeathers.main.pressure }}hPA</div>
    </div>

    <div class="detail-item">
      <div class="title">{{ $t("tempMin") }}</div>
      <div class="unit">
        {{ Math.ceil(getCurrentWeathers.main.temp_min) }}{{ getUnitsTemp.temp }}
      </div>
    </div>

    <div class="detail-item">
      <div class="title">{{ $t("tempMax") }}</div>
      <div class="unit">
        {{ Math.ceil(getCurrentWeathers.main.temp_max) }}{{ getUnitsTemp.temp }}
      </div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("cloudy") }}</div>
      <div class="unit">{{ getCurrentWeathers.clouds.all }}%</div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("humidity") }}</div>
      <div class="unit">{{ getCurrentWeathers.main.humidity }}%</div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("wind") }}</div>
      <div class="unit">
        {{ getCurrentWeathers.wind.speed }}{{ getUnitsTemp.speed }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "DetailWeather",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      errors: [],
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    };
  },
  created() {
    this.fetchCurrentWeather();
  },

  methods: {
    ...mapActions(["fetchCurrentWeather"]),
    getDateTime() {
      return moment(new Date()).format("hh:mm a - DD, MMM 'YY");
    },
  },
  computed: {
    ...mapGetters(["getCurrentWeathers", "getUnitsTemp"]),
  },
  mounted() {},
};
</script>


<style scoped lang="scss">
.current-weather {
  .date-time {
    color: #eb6e4b;
  }

  .weather-content {
    .weather-icon {
      text-align: center;
      img {
        width: 50px;
      }
    }
    margin-top: 50px;
    .current-temp {
      display: flex;
      align-items: center;
      .temp {
        position: relative;
        font-size: 5rem;
        padding-right: 15px;
        .unit {
          font-size: 1rem;
          position: absolute;
          right: 0;
          top: 15px;
        }
      }
      .heading {
        font-size: 36px;
        font-weight: 100;
        margin-right: 8pt;
      }
    }
    .local {
      margin: 0 15px;
      h2 {
        margin-bottom: 0px !important;
      }
      .coordinates {
        // display: flex;
      }
      // font-size: 30px;
    }
  }
  .weather-detail {
    h6 {
      padding-bottom: 10px;
      margin-bottom: 40px;
      border-bottom: 1px solid white;
    }
    padding: 10px 10px;
    // color: black;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;

    .detail-item {
      margin-bottom: 20px;
      .title {
        width: 50%;
        text-align: left;
      }

      .unit {
        width: 50%;
        text-align: right;
      }
      display: flex;
    }
  }
}
@media only screen and (max-width: 576px) {
  .current-weather {
    // display: none;
    .header {
      .language,
      .unit {
        display: none;
      }
    }
    .weather-content {
      .current-temp {
        justify-content: center;
        .temp {
          font-size: 7rem;
        }
      }
      text-align: center;
    }
  }
}
</style>
