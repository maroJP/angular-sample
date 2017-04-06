package jp.maro.controller.api;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/locale")
public class LocaleController {

	@RequestMapping(method = RequestMethod.GET)
	public Locale get() {
		Locale locale = new Locale();
		locale.setLanguage(LocaleContextHolder.getLocale().getLanguage());
		return locale;
	}



}
