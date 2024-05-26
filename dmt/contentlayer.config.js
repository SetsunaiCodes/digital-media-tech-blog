import {defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from '@jsdevtools/rehype-toc';

/** @type {import('contentlayer/source-files).ComputedFields}*/
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => '/${doc._raw.flattenedPath}',
    },
    slugParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Doc = defineDocumentType(() => ({

    name: 'Doc',
    filePathPattern: 'blog/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        img: {
            type: 'string',
            required: true
        },
        des: {
            type: 'string',
            required: true
        },
        tag: {
            type: 'string',
            required: false
        }
    },
    computedFields,
}))

const customizeTOC = (toc) => {
    try {
      const { children } = toc;
      const childrenOfChildren = children?.[0]?.children;
      if (!children?.length || !childrenOfChildren?.length) return null;
    } catch (e) {}
    return {
      type: 'element',
      tagName: 'div',
      properties: { className: 'toc' },
      children: [
        ...(toc.children || []),
      ],
    };
  };
  

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{type: 'text', value: ''}]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHighlightedWord(node){
                        node.properties.className = ['word--highlighted']
                    }
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    }
                }
            ],
            [
                rehypeToc,
                {
                    customizeTOC: customizeTOC,
                }
            ]
        ]
    }

});