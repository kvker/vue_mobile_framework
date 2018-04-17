<template lang="pug">
    .account-way1.account-way
        .money-cycle
            .money-cycle-box
                .money-cycle-main
                    ul
                        li.own-title 欠款金额
                        li.own-money ¥ {{ownMoney | formateMoney}}
        .count
        slot

</template>

<script>
export default {
	props: {
        ownMoney: {
            type: Number,
            default: 30000
        }
	},
	methods: {
		
    },
    filters: {
        formateMoney(val) {
            return val
        }
    }
}
</script>

<style lang="less" scoped>
	.money-cycle {
		display: flex;
		justify-content: center;
		.money-cycle-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 50%;
			background-image: linear-gradient(-179deg, #7899F5 0%, #4875F5 100%);
			.money-cycle-main {
				width: 1.12rem;
				height: 1.12rem;
				border-radius: 50%;
				background: #fff;
				ul {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 100%;
					height: 100%;
					text-align: center;
					.own-title {
						margin-bottom: 0.16rem;
						font-size: 10px;
						color: rgba(0,0,0,0.45);
					}
					.own-money {
						font-size: 16px;
						color: #4875F5;
					}
				}
			}
		}
	}
</style>
