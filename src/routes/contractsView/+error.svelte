<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>Yikes! 💥</h1>
<h3>Something went wrong</h3>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>