<script setup lang="ts">
const meta = useSiteMeta()
const form = reactive<{
    name: string
    email: string
    phone: string
    company: string
    message: string
}>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
})
const errorMessage = ref<string>('')

const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/
const emailValidation = computed(() => {
    return emailPattern.test(form.email)
})

const phonePattern = /^\d{9}$/
const phoneValidation = computed(() => {
    return phonePattern.test(form.phone)
})

function submitForm() {
    if (!phoneValidation.value && !emailValidation.value) {
        errorMessage.value = 'Email and phone are not valid'
    }
    else if (!emailValidation.value) {
        errorMessage.value = 'Email is not valid'
    }
    else if (!phoneValidation.value) {
        errorMessage.value = 'Phone is not valid'
    }
    else if (form.name.length === 0) {
        errorMessage.value = 'Name is required'
    }
    else if (form.message.length === 0) {
        errorMessage.value = 'Message is required'
    }
    else if (emailValidation.value && phoneValidation.value && form.message.length > 0 && form.name.length > 0) {
        $fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }
}

useSeoMeta({
    title: meta.SiteName + ' - Contact',
    description: meta.SiteDescription
})
</script>
<template>
    <section class="flex">
        <article class="w-1/2 min-height flex justify-center items-center">
            <div>
                <h2>Contact me for future collaboration!</h2>
                <div class="flex flex-col gap-2 mt-6">
                    <div>
                        <NuxtLink to="mailto:cernochm@outlook.cz" target="_blank" class="animation-underline">
                            <i class="fa-solid fa-envelope pr-2" /> cernochm@outlook.cz
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="tel:+420775064499" class="animation-underline">
                            <i class="fa-solid fa-phone pr-2" /> (+420) 775 064 499
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="https://www.innodex.cz" target="_blank" class="animation-underline">
                            <i class="fa-solid fa-globe pr-2" /> www.innodex.cz
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </article>
        <article class="w-1/2 min-height flex justify-center items-center">
            <div class="flex flex-col gap-2 w-[480px]">
                <label for="text">Name*</label>
                <input v-model="form.name" type="text" placeholder="Name*" class="border-color" required />
                <label for="email">Email*</label>
                <input v-model="form.email" type="email" placeholder="Email*" class="border-color" required />
                <label for="text">Phone</label>
                <input v-model="form.phone" type="text" placeholder="Phone" class="border-color" />
                <label for="text">Company</label>
                <input v-model="form.company" type="text" placeholder="Company" class="border-color" />
                <label for="text">Message*</label>
                <textarea v-model="form.message" placeholder="Message*" class="border-color" required />
                <button @click="submitForm()" class="full px-3 text-white text-center py-1.5 rounded-md mt-4">
                    Submit
                </button>
                <p class="text-center">{{ errorMessage }}</p>
            </div>
        </article>
    </section>
</template>