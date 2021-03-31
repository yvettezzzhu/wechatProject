<template>
	<template>
		<view class="">
			<web-view :src="url" :progress="false"></web-view>
		</view>
		
	</template>
</template>

<script>
    export default {
        data() {
            return {
                url:'https://m.baodan360.com/insurance/detail?id=160782&chn=cps_148952159"',
                title:'FUXING'
            }
        },
        onLoad(res) {
			console.log(res.url)
            this.url = decodeURIComponent(res.url);
			console.log(this.url)
        },
		onReady(){
            uni.setNavigationBarTitle({
                title:this.title
            })
        }
    }
</script>

<style>

</style>
