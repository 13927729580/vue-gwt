package com.axellience.vuegwt.client.vue;

import com.axellience.vuegwt.client.Vue;
import com.axellience.vuegwt.client.component.options.VueComponentOptions;
import com.axellience.vuegwt.client.directive.options.VueDirectiveOptions;
import com.axellience.vuegwt.client.jsnative.jstypes.JsFunction;
import com.axellience.vuegwt.client.jsnative.jstypes.JsObject;
import com.axellience.vuegwt.client.tools.JsTools;
import com.axellience.vuegwt.client.tools.VueGwtTools;
import com.axellience.vuegwt.jsr69.component.annotations.Component;
import com.axellience.vuegwt.jsr69.component.annotations.JsComponent;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * A Java representation of a Vue Constructor.
 * Vue Constructor are JavaScript Function obtained when calling Vue.extend().
 * All the {@link Component} and {@link JsComponent} get a generated VueConstructor.
 * @author Adrien Baron
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Function")
public class VueConstructor<T extends Vue> extends JsFunction
{
    @JsOverlay
    public final T instantiate()
    {
        return VueGwtTools.createInstanceForVueClass(this);
    }

    @JsOverlay
    public final <K extends T> VueConstructor<K> extend(VueComponentOptions<K> vueComponentOptions)
    {
        return VueGwtTools.extendVueClass(this, vueComponentOptions);
    }

    @JsOverlay
    protected final JsObject<VueConstructor> getOptionsComponents()
    {
        JsObject options = JsTools.get(this, "options");
        JsObject<VueConstructor> components = (JsObject<VueConstructor>) options.get("components");
        if (components == null)
        {
            components = new JsObject<>();
            options.set("components", components);
        }
        return components;
    }

    @JsOverlay
    protected final JsObject<VueDirectiveOptions> getOptionsDirectives()
    {
        JsObject options = JsTools.get(this, "options");
        JsObject<VueDirectiveOptions> directives =
            (JsObject<VueDirectiveOptions>) options.get("directives");
        if (directives == null)
        {
            directives = new JsObject<>();
            options.set("directives", directives);
        }
        return directives;
    }
}
