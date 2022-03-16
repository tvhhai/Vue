<template>
  <div class="current-weather container">
    <div class="row justify-content-center">
      <div class="col-sm-5">
        <AppHeader />
        <div class="weather-content">
          <div class="current-temp">
            <span class="temp"
              >{{ Math.ceil(getCurrentWeathers.main.temp) }}
              <span class="unit">{{ getUnitsTemp.temp }} </span>
            </span>

            <div class="weather-icon">
              <img
                :src="
                  'http://openweathermap.org/img/wn/' +
                  getCurrentWeathers.weather[0].icon +
                  '@4x.png'
                "
                alt=""
              />
              <p>{{ getCurrentWeathers.weather[0].main }}</p>
            </div>
          </div>
          <div class="local">
            <h2>
              {{ getCurrentWeathers.name }}
            </h2>
            <span>
              {{ getCurrentWeathers.weather[0].description }}
            </span>
            <div class="coordinates">
              <span
                >{{ $t("longitude") }}: {{ getCurrentWeathers.coord.lon }}</span
              >
              -
              <span
                >{{ $t("latitude") }}: {{ getCurrentWeathers.coord.lat }}</span
              >
            </div>

            <p>{{ getDateTime() }}</p>
          </div>
        </div>
      </div>

      <div class="col-sm-4 col-md-3 weather-detail"><DetailWeather /></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

import DetailWeather from "./detailWeather.vue";

export default {
  name: "InforWeather",
  props: {
    msg: String,
  },
  components: { DetailWeather },
  data() {
    return {};
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
