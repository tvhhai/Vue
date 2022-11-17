<template>
  <div>
    <q-list>

      <q-item clickable
              v-ripple
              v-for="(item, index) in listItem"
              :key="index">

        <q-item-section avatar>
          <q-icon :name="item.icon"/>
        </q-item-section>

        <q-item-section>{{ item.id }}</q-item-section>

      </q-item>

      <q-expansion-item
        expand-separator
        icon="mail"
        label="Inbox"
        caption="5 unread emails"
        default-opened
      >
        <q-expansion-item
          :header-inset-level="1"
          expand-separator
          icon="receipt"
          label="Receipts"
          default-opened
        >

          <q-expansion-item switch-toggle-side
                            dense-toggle label="Today"
                            :header-inset-level="1"
                            :content-inset-level="2">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-item
            clickable
            v-ripple
            :header-inset-level="1"
            :content-inset-level="2"
            :active="link === 'outbox'"
            @click="link = 'outbox'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="send"/>
            </q-item-section>

            <q-item-section>Outbox</q-item-section>
          </q-item>

        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import {SideBarConfigList} from './SideBarConfigList'

export default {
  name: 'SideBarListItem',
  data() {
    return {

      listItem: [
        SideBarConfigList.dashboard,
        SideBarConfigList.home
      ]
    }
  }
};
</script>

<style scoped>

</style>
