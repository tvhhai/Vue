<template>
  <div>
    <h4>{{ $t("weatherDetail") }}</h4>
    <div class="detail-item">
      <div class="title">{{ $t("pressure") }}</div>
      <div class="unit">
        <p>{{ getCurrentWeathers.main.pressure }}hPA</p>
      </div>
    </div>

    <div class="detail-item">
      <div class="title">{{ $t("tempMin") }}</div>
      <div class="unit">
        <p>
          {{ getCurrentWeathers.main.temp_min | formatTemp
          }}{{ getUnitsTemp.temp }}
        </p>
      </div>
    </div>

    <div class="detail-item">
      <div class="title">{{ $t("tempMax") }}</div>
      <div class="unit">
        <p>
          {{ getCurrentWeathers.main.temp_max | formatTemp
          }}{{ getUnitsTemp.temp }}
        </p>
      </div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("cloudy") }}</div>
      <div class="unit">
        <p>{{ getCurrentWeathers.clouds.all }}%</p>
      </div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("humidity") }}</div>
      <div class="unit">
        <p>{{ getCurrentWeathers.main.humidity }}%</p>
      </div>
    </div>
    <div class="detail-item">
      <div class="title">{{ $t("wind") }}</div>
      <div class="unit">
        <p>{{ getCurrentWeathers.wind.speed }}{{ getUnitsTemp.speed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WeatherDetails",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCurrentWeathers", "getUnitsTemp"]),
  },
  mounted() {},
};
</script>


<style scoped lang="scss">
.current-weather {
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
    }
  }
  .weather-detail {
    h4 {
      padding-bottom: 10px;
      margin-bottom: 40px;
      border-bottom: 1px solid white;
      font-weight: 100;
    }
    padding: 10px 10px;
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
