package sk.umb.skuska.lmikusova.cddb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sk.umb.skuska.lmikusova.cddb.domain.Zaner;
import sk.umb.skuska.lmikusova.cddb.domain.ZanerDto;
import sk.umb.skuska.lmikusova.cddb.service.ZanerService;

import java.util.List;

@RestController
public class ZanerController {

    public ZanerController(ZanerService zanerService) {
        this.zanerService = zanerService;
    }

    private ZanerService zanerService;

    @PostMapping("/api/add-zaner")
    public String addZaner(@RequestBody ZanerDto dto) {
        Zaner zaner = new Zaner();

        zaner.setId(dto.getId());
        zaner.setNazov(dto.getNazov());

        zanerService.addZaner(zaner);
        return new String("zaner bol pridany!");
    }

    @GetMapping("/api/get-zanre")
    public List<Zaner> getAllZanre() {
        List<Zaner> zanre = zanerService.getAllZanre();
        return zanre;
    }
}
