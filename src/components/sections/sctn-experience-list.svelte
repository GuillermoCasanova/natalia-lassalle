<script>
export let section;
</script>

<section>
  <div class="experience-list">
    <div class="experience-list__inner">
      <h2 class="experience-list__headline">{section.title}</h2>
      {#if section.elements && section.elements.length > 0}
        <ul>
          {#each section.elements as experience}
            <li class="experience-list__item">
              <span class="experience-list__item__year">
                {experience.year}
              </span>
              {#if experience.link && experience.link.href !== undefined}
                <a href={experience.link.href} target="_blank">
                  {experience.name}
                  <span class="external-link-icon">
                    <svg>
                      <use xlink:href="#icon-external-link" />
                    </svg>
                  </span>
                </a>
              {:else}
                <span class="experience-list__item__name">
                  {experience.name}
                </span>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</section>

<style>
.experience-list {
  border-bottom: 1px solid black;
  padding-bottom: var(--level5);
}

.experience-list__headline {
  font-size: var(--h4);
  text-transform: uppercase;
}

.experience-list__item {
  margin-bottom: var(--level2);
  display: grid;
  grid-template-columns: 0.15fr 1fr;
}
.experience-list__item__year {
  font-weight: bold;
  width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

.external-link-icon {
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  margin-right: var(--level1);
}

.external-link-icon svg {
  width: 100%;
  height: 100%;
}
</style>
