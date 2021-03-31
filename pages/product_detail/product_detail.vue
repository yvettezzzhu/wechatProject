<template>
	<web-view :src="url" :progress="false"></web-view>
</template>

<script>
    export default {
        data() {
            return {
                url:'',
                title:'复星'
            }
        },
        onLoad(option) {
			console.log(option.id)
			if (option.id == "0"){
				uni.navigateTo({
					url:"../consultant/consultant"
				})
			}else{
				var that = this;
				uniCloud.callFunction({
					name:"productdetail",
					data:{
						id: option.id
					},
					success(res) {
						console.log(res.result[0].outurl)
						that.url = decodeURIComponent(res.result[0].outurl);
						console.log(that.url)
					},
					fail() {
						
					}
				})
			}
			
            
        },
		onReady(){
            uni.setNavigationBarTitle({
                title:this.title
            })
        }
    }
</script>
