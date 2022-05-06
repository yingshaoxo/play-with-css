<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch } from 'vue'

import { PlayCircleFilled, PauseCircleFilled, SoundFilled } from '@ant-design/icons-vue'

import store from '../../store'

import dayjs from 'dayjs'

const dict = reactive({
  references: {
  },
  data: {
    everyday_title_in_a_week: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    currentDate: dayjs(),
    selectedDay: null as null | dayjs.Dayjs,
  },
  functions: {
    goToThePreviousYear: () => {
      dict.data.currentDate = dict.data.currentDate.subtract(1, 'year')
    },
    goToTheNextYear: () => {
      dict.data.currentDate = dict.data.currentDate.add(1, 'year')
    },
    goToPreviousMonth: () => {
      dict.data.currentDate = dict.data.currentDate.subtract(1, 'month')
    },
    goToNextMonth: () => {
      dict.data.currentDate = dict.data.currentDate.add(1, 'month')
    },
    getCurrentDayByDayNumber: (dayNumber: number) => dict.data.currentDate.date(dayNumber),
    getMyDayOfWeek: (num: number) => {
      if (num == 0) {
        num = 7
        return num
      } else {
        return num
      }
    },
  },
})

// dayjs("2021-9-1").date(1).day()
</script>

<template class="big">
  <div
    class="calendar_container"
    @click="dict.data.selectedDay = null">
    <!-- <div class="title">
      Calendar
    </div> -->

    <div class="controller_header">
      <div
        class="previous_year"
        @click="dict.functions.goToThePreviousYear">
        {{ '<<' }}
      </div>
      <div
        class="previous_month"
        @click="dict.functions.goToPreviousMonth">
        {{ '<' }}
      </div>
      <div class="selected_year_and_month_title">{{ dict.data.currentDate.format('MMMM YYYY') }}</div>
      <div
        class="next_month"
        @click="dict.functions.goToNextMonth">
        {{ '>' }}
      </div>
      <div
        class="next_year"
        @click="dict.functions.goToTheNextYear">
        {{ '>>' }}
      </div>
    </div>

    <div
      class="days_grid">
      <div
        v-for="(title, index) in dict.data.everyday_title_in_a_week"
        :key="index">
        <div class="tooltip">
          <div class="tooltip_text">
            {{
              title
            }}
          </div>
          <div class="head_title">
            {{
              title.slice(0, 3)
            }}
          </div>
        </div>
      </div>

      <div
        v-for="(dayNumber, index) in (dict.functions.getMyDayOfWeek(dict.data.currentDate.date(1).day()) - 1) "
        :key="index"
        class="fake_day_cell" />

      <div
        v-for="(dayNumber, index) in dict.data.currentDate.daysInMonth()"
        :key="index"
        :class="{
          'day_on_select': dict.data.selectedDay?.unix() === dict.functions.getCurrentDayByDayNumber(dayNumber).unix(),
        }"
        class="day_cell"
        @click.stop="()=> {
          dict.data.selectedDay = dict.functions.getCurrentDayByDayNumber(dayNumber)
        }"
        @focusin="()=> {
          dict.data.selectedDay = null
        }">
        <div class="what">
          {{ dayNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@calendar_width: 100vw;
@calendar_height: 100vh;
@day_cell_length: calc((@calendar_width - 90px) / 7);

.Rows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.day_on_select {
  color-scheme: light;
  user-select: none;
  color: #4f5964;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  // transition: background-color .2s,color .2s;
  cursor: pointer;
  // background-color: #5FA2DD;
  background-color: #feac31;
  color: white;
  border-color: transparent;

  @media (min-width: 948px) {
    max-width: 20%;
    height: 35%;
    border-radius: 0;
    margin-left: 39.5%;
    // background-color: transparent;
    // color: #4f5964;
    & > div {
      width: 50%;
    }
  }
}

.calendar_container {
  height: @calendar_height;
  width: @calendar_width;

  // background-color: lightgreen;
  background-color: white;

  overflow: hidden;

  .Rows();
  justify-content: flex-start;
  padding-top: 22vh;

  @media (min-width: 948px) {
    padding-top: 0px;
  }

  .title {
    margin-bottom: 40px;
  }

  .controller_header {
    .Columns();

    justify-content: space-between;

    // width: calc(@calendar_width * 0.6);
    width: 60%;

    margin-bottom: 20px;

    > div {
      text-align: center;

      width: 20px;
      height: 20px;

      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;

      &:hover {
        cursor: pointer;
      }
      &:nth-child(3) {
        cursor: default;
        user-select: auto;
      }
    }

    .selected_year_and_month_title {
      min-width: calc(@calendar_width * 0.3);

      text-align: center;
    }
  }

  @media (min-width: 948px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .days_grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .days_grid {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    // grid-template-rows: ; 
    column-gap: 8px;
    row-gap: 8px;

    > div {
      min-width: @day_cell_length;
      min-height: @day_cell_length;

      .Rows();
    }

    .head_title {
      border-bottom: 1px dotted black;
    }

    .tooltip {
      position: relative;
      display: inline-block;

      &:hover .tooltip_text {
        visibility: visible;
      }

      .tooltip_text {
        visibility: hidden;

        width: 100px;
        background-color: black;
        color: #fff;

        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        bottom: 30px;
        left: -38px;

        position: absolute;
        z-index: 1;
      }
    }

    .day_cell {
      @media (min-width: 948px) {
        @length: 50px;
        text-align: center;

        width: 100%;
        height: 100%;
        min-height: @length;
        min-width: @length;

        .Rows();

        .what {
          .Rows();

          width: @length;
          height: @length;
          min-height: @length;
          min-width: @length;

          &:hover {
            background-color: #5FA2DD;
            // background-color: #feac31;
            color: white;
          }
        }
      }

      &:hover {
        color-scheme: light;
        user-select: none;
        color: #4f5964;
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        transition: background-color .2s,color .2s;
        cursor: pointer;
        // border-color: #feac31;
        // background-color: transparent;
        background-color: #5FA2DD;
        // background-color: #feac31;
        color: white;
        border-color: transparent;

        @media (min-width: 948px) {
          background-color: transparent;
          color: #4f5964;
        }
      }
    }
  }
}
</style>