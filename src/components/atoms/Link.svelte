<script>
  export let linkTo
  export let isOutLink = true
</script>

<a 
  href={linkTo} 
  target={isOutLink ? "_blank" : ""}
  rel={isOutLink ? "noopener noreferrer" : ""}
>
<slot></slot>
</a>

