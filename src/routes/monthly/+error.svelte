<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>Yikes! 💥</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>