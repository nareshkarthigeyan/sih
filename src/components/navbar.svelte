<script>
    import NavbarItem from "./navbarItem.svelte";
    let items = ["Dashboard", "Student", "Staff", "Academics", "Performance", "Fees"];
</script>

<div class="app-container">
    <nav class="navbar">
        {#each items as item}
            <NavbarItem name={item} />
        {/each}
    </nav>
    <div class="content">
        main content
    </div>
</div>

<style>
    .app-container {
        display: flex;
        height: 100vh;
    }

    .navbar {
        background-color: #DDDEEE;
        width: 20%;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
    }

    .navbar p {
        margin: 0;
    }

    .content {
        width: 80%;
        padding: 20px;
        background-color: #F9F9F9;
    }

    .navbar .btn-active {
        background-color: #9E7BB5;
        color: white;
    }
</style>