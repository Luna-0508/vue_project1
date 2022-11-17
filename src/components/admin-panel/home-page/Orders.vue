<script>
export default class orderData {
  getOrders() {
    return fetch("../../../../orders.json")
      .then(res => res.json())
      .then(d => d.data);
  }
}
</script>
