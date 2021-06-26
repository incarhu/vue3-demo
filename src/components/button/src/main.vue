<template>
	<div class="btn-wrap">
        <button @click="handleClick" class="default-btn" ref="button" :disabled="disabled" :class="[type + '-btn']">
			<span v-text="btnText"></span>
        </button>
    </div>
</template>

<script>
	export default {
        name: 'Button',
		props: {
			btnText: {
				type: String,
				default: '默认'
			},
			type: {
				type: String,
				default: ''
			},
			disabled: Boolean
		},
		mounted () {
			this.getDisabled()
		},
		methods: {
			// 获取当前button是否传递disabled
			getDisabled () {
				if (this.disabled) {
					this.$refs.button.classList.add('disabled-btn')
				}
			},

			handleClick (event) {
				if (this.disabled) return
				this.$emit('click', event)
			}
		}
	}
</script>

<style scoped lang="scss">
.btn-wrap {
    .default-btn {
        display: block;
        outline: 0 none;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        font-size: 16px; /*no*/
        width: 100%;
        height: 94px;
        line-height: 94px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: #fff;
        border: 1px solid #ddd; /*no*/
        border-radius: 5px;/*no*/
    }
    .primary-btn {
        background-color: #0e80d2;
        color: #fff;
        &:active {
            background-color: #0e80d2;
            color: #f6f6f6;
        }
    }
    .disabled-btn {
        color: rgba(0, 0, 0, 0.3);
        opacity: .6;
    }
}
</style>