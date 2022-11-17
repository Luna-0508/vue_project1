<script>
import orderData from "../../components/admin-panel/home-page/Orders.vue";
import StatisticChart from "../../components/admin-panel/home-page/StatisticChart.vue";

export default {
  data() {
    return {
      orders: null,
    };
  },
  orderData: null,
  created() {
    this.orderData = new orderData();
  },
  mounted() {
    this.orderData.getOrders().then(data => (this.orders = data));
  },
  components: {
    StatisticChart,
  },
};
</script>

<template>
  <!-- QUICK STATS -->

  <div id="quickStats" class="pb-3">
    <div class="surface-ground px-4 py-5 md:px-6 lg:px-8 border-round">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
          <router-link :to="{ name: 'orders' }">
            <Button
              label="ORDERS"
              class="p-button-raised p-button-text p-button-plain flex justify-content-between mb-3"
            />
          </router-link>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <router-link :to="{ name: 'revenue' }">
            <Button
              label="REVENUE"
              class="p-button-raised p-button-text p-button-plain flex justify-content-between mb-3"
            />
          </router-link>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <Button
            label="CUSTOMERS"
            class="p-button-raised p-button-text p-button-plain flex justify-content-between mb-3"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <router-link :to="{ name: 'comments' }">
            <Button
              label="COMMENTS"
              class="p-button-raised p-button-text p-button-plain flex justify-content-between mb-3"
            />
          </router-link>
        </div>
      </div>

      <!--  KAFELKI-->

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Orders</span>
                <div class="text-900 font-medium text-xl">152</div>
              </div>
              <div
                class="flex align-items-center justify-content-center bg-blue-100 border-round"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Revenue</span>
                <div class="text-900 font-medium text-xl">$2.100</div>
              </div>
              <div
                class="flex align-items-center justify-content-center bg-orange-100 border-round"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i class="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">%52+ </span>
            <span class="text-500">since last week</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Customers</span>
                <div class="text-900 font-medium text-xl">28441</div>
              </div>
              <div
                class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i class="pi pi-inbox text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">520 </span>
            <span class="text-500">newly registered</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Comments</span>
                <div class="text-900 font-medium text-xl">152 Unread</div>
              </div>
              <div
                class="flex align-items-center justify-content-center bg-purple-100 border-round"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i class="pi pi-comment text-purple-500 text-xl"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">85 </span>
            <span class="text-500">responded</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- LAST ORDERS -->
  <div id="todayOrders" class="pb-3">
    <div class="surface-ground px-4 py-5 md:px-6 lg:px-8 border-round">
      <div class="card">
        <DataTable :value="orders" responsiveLayout="scroll">
          <template #header> Today Orders </template>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  </div>

  <!-- STATISTICS -->
  <div id="statistic" class="pb-3 pl-3">
    <div class="surface-ground px-2 py-2 md:px-2 lg:px-2 border-round">
      <StatisticChart />
    </div>
  </div>
</template>
