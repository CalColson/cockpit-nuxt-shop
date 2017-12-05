<template>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-one-third-desktop" v-for="p in products" :key="p.id">
      <small-product :product="p" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import SmallProduct from '../components/SmallProduct.vue'

export default {
  components: {SmallProduct},
  async asyncData ({env, params}) {

    // Cockpit CMS update broke the thumbnail process... terminating the rest of this tutorial, but still learned a lot!

    // let {data} = await axios.get(`${env.cockpit.apiUrl}/collections/get/Product?token=${env.cockpit.apiToken}`)

    // let products = await Promise.all(await data.entries.map(async (p) => {
    //   let result = await axios.post(`${env.cockpit.apiUrl}/cockpit/image?token=${env.cockpit.apiToken}`, {
    //     src: p.Image,
    //     m: 'resize',
    //     w: 300,
    //     h: 300,
    //     q: 80
    //   })

    //   p.ThumbUrl = `${env.cockpit.baseUrl}${result.data[p.Image]}`
    //   p.ThumbUrl = result
    //   return p
    // }))

    // return {
    //   products
    // }
  }
}
</script>
