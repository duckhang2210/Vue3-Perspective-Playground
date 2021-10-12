Vue.createApp({
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			boxColor: '',
			borderColor: '',
			borderRadius: 0,
			boxRadius: 0
		};
	},
	computed: {
		box() {
			return {
				transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `,
				background: this.boxColor,
				'border-radius': `${this.boxRadius}px`
			};
		},
		boxContainer() {
			return {
				'border-color': this.borderColor,
				'border-radius': `${this.borderRadius}px`
			};
		}
	},
	methods: {
		reset() {
			this.perspective = 100;
			this.rotateX = 0;
			this.rotateY = 0;
			this.rotateZ = 0;
			this.boxColor = '';
			this.borderColor = '';
			this.borderRadius = 0;
			this.boxRadius = 0;
		}
	}
}).mount('#app');
