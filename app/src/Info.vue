
<template>
  <div id="info">
		<ul>
			<li v-for="detail in details" :key="detail">
				{{detail}}
			</li>
		</ul>
  </div>
</template>

<script defer>
/* eslint-disable */
export default {
  data() {
    return {
      el: "#info",
      details: ["20% polyester", "80% cotton", "gender-neutral"],
    };
  },
};
</script>
