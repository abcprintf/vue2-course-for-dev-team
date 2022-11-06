<template>
  <div class="container">
    <h1>Table page</h1>

    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in lists" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <router-link to="/">Home</router-link>
      -
      <router-link to="/about">About</router-link>
      -
      <router-link to="/table">Table</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "AA",
        },
        {
          id: 2,
          name: "BB",
        },
      ],
    };
  },
  mounted() {
    console.log(`table mounted`);
  },
};
</script>