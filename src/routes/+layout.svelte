<script lang="ts">
	import { writable } from "svelte/store";

    const hideConsent = writable((typeof window !== "undefined") ? window.localStorage.getItem('hideConsent') === 'true' : false);

    hideConsent.subscribe(value => {
        if (value && typeof window !== "undefined" && typeof gtag === "function") {
            window.localStorage.setItem('hideConsent', 'true');

            gtag('consent', 'update', {
				'ad_storage': 'granted',
				'ad_user_data': 'granted',
				'ad_personalization': 'granted',
				'analytics_storage': 'granted'
            });
        }
    });

	function consent() {
        hideConsent.set(true);
	}
</script>

<slot />

<div class={$hideConsent ? 'consent-hide' : 'consent-show'}>
	<p>
		This website uses cookies to improve your experience. By using this website, you agree to our
		use of cookies.
	</p>
	<button on:click={consent}>I Agree</button>
</div>

<style>
    .consent-hide {
        display: none;
    }

    .consent-show {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        color: #000;
        padding: 30px;
        text-align: center;
        font-size: 1.3rem;
    }

    button {
        background-color: #00ee00;
        color: #000;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    button:hover {
        background-color: #333;
        color: #fff;
    }
</style>