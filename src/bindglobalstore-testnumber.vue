<template>
    <div>
        <p>
            testnumber:
            <input class="form-control" v-model="testnumber" />
        </p>

        <button
            class="btn btn-outline-success btn-lg"
            v-on:click="changevalue()"
        >
            修改testnumber
        </button>
    </div>
</template>

<script src="./bindglobalstore-testnumber.js"></script>
