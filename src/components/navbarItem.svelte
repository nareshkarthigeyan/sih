<script>
    export let name;
    export let redirectTo = "https://www.google.com"; // Full URL with protocol
</script>

<div class="btn" on:click={() => { window.location.href = redirectTo }}>
    {name}
</div>


<style>
    .btn {
        padding: 15px;
        width: 100%;
        color: black;
        border-radius: 5px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        align-items: center;
        margin: 5px 0;
        transition: background-color 0.3s;
    }

    .btn:text {
        margin-left: 10px;
    }

    .btn:hover {
        background-color: #A492B5;
        cursor: pointer;
    }

    .btn:active {
        background-color: #A492B5;
        color: white;
    }
</style>
